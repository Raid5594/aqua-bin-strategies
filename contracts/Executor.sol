// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {SignatureChecker} from "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import {ISwapVM} from "swap-vm/interfaces/ISwapVM.sol";
import {TakerTraitsLib} from "swap-vm/libs/TakerTraits.sol";
import {PythPriceAdapter} from "./PythPriceAdapter.sol";
import {IPermit2} from "./interfaces/IPermit2.sol";

interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint256 amount) external;
}

/// @notice Atomically submits oracle updates, obtains authorized funding, and calls production SwapVM.
/// @dev The executor is the router's taker. External owners must authorize this executor, not Multicall3.
contract Executor is EIP712 {
    using SafeERC20 for IERC20;

    enum Funding { Allowance, Permit2Allowance, Permit2Witness, Native }

    struct Trade {
        address owner;
        address recipient;
        address tokenIn;
        address tokenOut;
        uint256 amount;
        uint256 maxInput;
        uint256 minOutput;
        bool exactIn;
        bool nativeOutput;
        Funding funding;
        uint256 nonce;
        uint256 deadline;
        address solver;
    }

    bytes32 public constant TRADE_TYPEHASH = keccak256(
        "Trade(address owner,address recipient,bytes32 orderHash,address tokenIn,address tokenOut,uint256 amount,uint256 maxInput,uint256 minOutput,bool exactIn,bool nativeOutput,uint8 funding,uint256 nonce,uint256 deadline,address solver)"
    );

    string public constant WITNESS_TYPE_STRING =
        "Trade witness)TokenPermissions(address token,uint256 amount)Trade(address owner,address recipient,bytes32 orderHash,address tokenIn,address tokenOut,uint256 amount,uint256 maxInput,uint256 minOutput,bool exactIn,bool nativeOutput,uint8 funding,uint256 nonce,uint256 deadline,address solver)";

    bytes32 private constant LOCK_SLOT = keccak256("aqua-bin-strategies.executor.lock");

    ISwapVM public immutable router;
    PythPriceAdapter public immutable oracle;
    IPermit2 public immutable permit2;
    IWETH public immutable weth;

    mapping(address => mapping(uint256 => bool)) public usedNonces;

    error Unauthorized();
    error InvalidTrade();
    error InvalidFunding();
    error ReentrantCall();
    error NativeTransferFailed();

    event Executed(bytes32 indexed orderHash, address indexed owner, address indexed recipient, uint256 amountIn, uint256 amountOut);
    event NonceCancelled(address indexed owner, uint256 nonce);

    /// @notice Deploys the executor with immutable settlement, verification, funding, and WETH contracts.
    constructor(ISwapVM swapRouter, PythPriceAdapter priceOracle, IPermit2 permit2Contract, IWETH wrappedEther)
        EIP712("AquaBinStrategies", "1") {
        require(address(swapRouter).code.length != 0 && address(priceOracle).code.length != 0
            && address(permit2Contract).code.length != 0 && address(wrappedEther).code.length != 0, InvalidTrade());

        router = swapRouter;
        oracle = priceOracle;
        permit2 = permit2Contract;
        weth = wrappedEther;
    }

    /// @notice Accepts native currency only from WETH withdrawals used for input refunds.
    receive() external payable {
        require(msg.sender == address(weth), InvalidFunding());
    }

    /// @notice Invalidates an unused executor authorization nonce owned by the caller.
    function cancelNonce(uint256 nonce) external {
        usedNonces[msg.sender][nonce] = true;

        emit NonceCancelled(msg.sender, nonce);
    }

    /// @notice Returns the EIP-712 digest for allowance-funded relayed execution.
    function authorizationDigest(Trade calldata trade, bytes32 orderHash) external view returns (bytes32) {
        return _hashTypedDataV4(_tradeHash(trade, orderHash));
    }

    /// @notice Returns the witness struct hash used by Permit2 SignatureTransfer.
    function witnessHash(Trade calldata trade, bytes32 orderHash) external pure returns (bytes32) {
        return _tradeHash(trade, orderHash);
    }

    /// @notice Simulates update-then-quote via eth_call; cache writes are discarded by the RPC simulation.
    /// @dev If sent as a transaction, a valid oracle update persists, but no tokens are funded or swapped.
    function quoteAfterUpdate(
        ISwapVM.Order calldata order,
        Trade calldata trade,
        bytes calldata oracleReport
    ) external payable returns (uint256 amountIn, uint256 amountOut, bytes32 orderHash) {
        uint256 verificationFee = oracleReport.length == 0 ? 0 : oracle.verificationFee();
        require(msg.value == verificationFee, InvalidFunding());

        if (oracleReport.length != 0) oracle.update{value: verificationFee}(oracleReport);

        TakerTraitsLib.Args memory takerTraits;
        takerTraits.taker = address(this);
        takerTraits.isExactIn = trade.exactIn;
        takerTraits.useTransferFromAndAquaPush = true;

        return router.quote(order, trade.tokenIn, trade.tokenOut, trade.amount, TakerTraitsLib.build(takerTraits));
    }

    /// @notice Executes an exact-input or exact-output trade and refunds unspent input to its owner.
    /// @param order Maker's Aqua-authorized production order.
    /// @param trade Funding owner and signed execution constraints.
    /// @param oracleReport Optional signed Pyth EVM update; omit when the cache already satisfies the strategy.
    /// @param authorization Executor EIP-712 signature for relayed allowance modes, or Permit2 witness signature.
    function execute(
        ISwapVM.Order calldata order,
        Trade calldata trade,
        bytes calldata oracleReport,
        bytes calldata authorization
    ) external payable returns (uint256 amountIn, uint256 amountOut) {
        return _execute(order, trade, oracleReport, authorization, msg.value);
    }

    /// @notice Executes several fills in one transaction, sharing oracle verification and transient curves.
    /// @dev Each trade retains its own owner authorization, nonce, recipient and price limits.
    function executeBatch(
        ISwapVM.Order[] calldata orders,
        Trade[] calldata trades,
        bytes calldata oracleReport,
        bytes[] calldata authorizations
    ) external payable returns (uint256[] memory amountsIn, uint256[] memory amountsOut) {
        require(orders.length == trades.length && trades.length == authorizations.length && trades.length != 0, InvalidTrade());

        uint256 verificationFee = oracleReport.length == 0 ? 0 : oracle.verificationFee();
        uint256 requiredCallValue = verificationFee;

        for (uint256 tradeIndex; tradeIndex < trades.length; ++tradeIndex) {
            if (trades[tradeIndex].funding == Funding.Native) requiredCallValue += trades[tradeIndex].maxInput;
        }

        require(msg.value == requiredCallValue, InvalidFunding());

        amountsIn = new uint256[](trades.length);
        amountsOut = new uint256[](trades.length);

        for (uint256 tradeIndex; tradeIndex < trades.length; ++tradeIndex) {
            uint256 tradeCallValue = trades[tradeIndex].funding == Funding.Native ? trades[tradeIndex].maxInput : 0;
            if (tradeIndex == 0) tradeCallValue += verificationFee;

            (amountsIn[tradeIndex], amountsOut[tradeIndex]) = _execute(
                orders[tradeIndex],
                trades[tradeIndex],
                tradeIndex == 0 ? oracleReport : oracleReport[:0],
                authorizations[tradeIndex],
                tradeCallValue
            );
        }
    }

    function _execute(
        ISwapVM.Order calldata order,
        Trade calldata trade,
        bytes calldata oracleReport,
        bytes calldata authorization,
        uint256 callValue
    ) private returns (uint256 amountIn, uint256 amountOut) {
        bytes32 lockSlot = LOCK_SLOT;
        uint256 lockState;
        assembly ("memory-safe") { lockState := tload(lockSlot) }

        require(lockState == 0, ReentrantCall());
        assembly ("memory-safe") { tstore(lockSlot, 1) }

        require(trade.owner != address(0) && trade.recipient != address(0) && trade.tokenIn != trade.tokenOut, InvalidTrade());
        require(trade.amount > 0 && trade.maxInput > 0 && trade.deadline >= block.timestamp
            && trade.deadline <= type(uint40).max, InvalidTrade());
        require(!trade.exactIn || trade.maxInput == trade.amount, InvalidTrade());
        require(!trade.nativeOutput || trade.tokenOut == address(weth), InvalidTrade());
        require(trade.solver == address(0) || trade.solver == msg.sender, Unauthorized());
        require(!usedNonces[trade.owner][trade.nonce], Unauthorized());

        bytes32 orderHash = router.hash(order);
        bytes32 tradeHash = _tradeHash(trade, orderHash);

        if (trade.funding != Funding.Permit2Witness && msg.sender != trade.owner) {
            require(trade.funding != Funding.Native && SignatureChecker.isValidSignatureNow(
                trade.owner, _hashTypedDataV4(tradeHash), authorization), Unauthorized());
        }

        usedNonces[trade.owner][trade.nonce] = true;

        uint256 verificationFee = oracleReport.length == 0 ? 0 : oracle.verificationFee();
        uint256 nativeInput = trade.funding == Funding.Native ? trade.maxInput : 0;
        require(callValue == verificationFee + nativeInput, InvalidFunding());

        if (oracleReport.length != 0) oracle.update{value: verificationFee}(oracleReport);

        IERC20 inputToken = IERC20(trade.tokenIn);
        uint256 inputBalanceBeforeFunding = inputToken.balanceOf(address(this));

        if (trade.funding == Funding.Allowance) {
            inputToken.safeTransferFrom(trade.owner, address(this), trade.maxInput);
        } else if (trade.funding == Funding.Permit2Allowance) {
            require(trade.maxInput <= type(uint160).max, InvalidFunding());
            permit2.transferFrom(trade.owner, address(this), uint160(trade.maxInput), trade.tokenIn);
        } else if (trade.funding == Funding.Permit2Witness) {
            permit2.permitWitnessTransferFrom(
                IPermit2.PermitTransferFrom(IPermit2.TokenPermissions(trade.tokenIn, trade.maxInput), trade.nonce, trade.deadline),
                IPermit2.SignatureTransferDetails(address(this), trade.maxInput), trade.owner,
                tradeHash, WITNESS_TYPE_STRING, authorization
            );
        } else {
            require(msg.sender == trade.owner && trade.tokenIn == address(weth), InvalidFunding());
            weth.deposit{value: nativeInput}();
        }

        require(inputToken.balanceOf(address(this)) == inputBalanceBeforeFunding + trade.maxInput, InvalidFunding());
        inputToken.forceApprove(address(router), trade.maxInput);

        TakerTraitsLib.Args memory takerTraits;
        takerTraits.taker = address(this);
        takerTraits.isExactIn = trade.exactIn;
        takerTraits.shouldUnwrapWeth = trade.nativeOutput;
        takerTraits.useTransferFromAndAquaPush = true;
        takerTraits.threshold = abi.encodePacked(trade.exactIn ? trade.minOutput : trade.maxInput);
        takerTraits.to = trade.recipient;
        takerTraits.deadline = uint40(trade.deadline);

        (amountIn, amountOut,) = router.swap(
            order, trade.tokenIn, trade.tokenOut, trade.amount, TakerTraitsLib.build(takerTraits)
        );
        require(amountIn <= trade.maxInput && amountOut >= trade.minOutput, InvalidTrade());

        inputToken.forceApprove(address(router), 0);
        require(inputToken.balanceOf(address(this)) == inputBalanceBeforeFunding + trade.maxInput - amountIn, InvalidFunding());

        uint256 refundAmount = trade.maxInput - amountIn;
        if (refundAmount != 0) {
            if (trade.funding == Funding.Native) {
                weth.withdraw(refundAmount);
                (bool transferSucceeded,) = payable(trade.owner).call{value: refundAmount}("");
                require(transferSucceeded, NativeTransferFailed());
            } else inputToken.safeTransfer(trade.owner, refundAmount);
        }

        emit Executed(orderHash, trade.owner, trade.recipient, amountIn, amountOut);

        assembly ("memory-safe") { tstore(lockSlot, 0) }
    }

    function _tradeHash(Trade calldata trade, bytes32 orderHash) private pure returns (bytes32) {
        return keccak256(abi.encode(TRADE_TYPEHASH, trade.owner, trade.recipient, orderHash, trade.tokenIn, trade.tokenOut,
            trade.amount, trade.maxInput, trade.minOutput, trade.exactIn, trade.nativeOutput, uint8(trade.funding), trade.nonce, trade.deadline, trade.solver));
    }
}
