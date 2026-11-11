// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Test} from "forge-std/Test.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AquaSwapVMRouter} from "swap-vm/routers/AquaSwapVMRouter.sol";
import {IAqua} from "@1inch/aqua/src/interfaces/IAqua.sol";
import {ISwapVM} from "swap-vm/interfaces/ISwapVM.sol";
import {PythPriceAdapter} from "../contracts/PythPriceAdapter.sol";
import {SpreadPricing} from "../contracts/SpreadPricing.sol";
import {Executor, IWETH} from "../contracts/Executor.sol";
import {IPermit2} from "../contracts/interfaces/IPermit2.sol";
import {BinStrategyBuilder} from "../contracts/libraries/BinStrategyBuilder.sol";
import {MockPythLazer} from "./mocks/MockPythLazer.sol";

interface IPermit2Domain {
    function DOMAIN_SEPARATOR() external view returns (bytes32);
}

/// @dev Optional fork integration: real production router, Aqua, USDC, WETH and Permit2 bytecode.
///      Only Pyth report authentication uses a local test signer/verifier.
contract MainnetForkTest is Test {
    address constant ROUTER = 0x111111338c5091E8440b67B168bAe16a668AC0De;
    address constant WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address constant PERMIT2 = 0x000000000022D473030F116dDEE9F6B43aC78BA3;

    uint256 constant ORACLE_KEY = 0x123456;
    uint256 constant USER_KEY = 0x987654;

    function test_ProductionShippingSwapAndRealPermit2Witness() public {
        string memory rpcUrl = vm.envOr("MAINNET_RPC_URL", string(""));

        if (bytes(rpcUrl).length == 0) {
            vm.skip(true);
            return;
        }

        vm.createSelectFork(rpcUrl);

        address maker = makeAddr("fork maker");
        address user = vm.addr(USER_KEY);
        AquaSwapVMRouter router = AquaSwapVMRouter(payable(ROUTER));
        IAqua aqua = router.AQUA();

        PythPriceAdapter oracle = new PythPriceAdapter(new MockPythLazer(vm.addr(ORACLE_KEY)), 1_000_000);
        SpreadPricing pricing = new SpreadPricing(ROUTER, oracle);
        Executor executor = new Executor(ISwapVM(ROUTER), oracle, IPermit2(PERMIT2), IWETH(WETH));
        BinStrategyBuilder builder = new BinStrategyBuilder();

        SpreadPricing.Config memory config = SpreadPricing.Config(
            WETH, USDC, 1, 1e12, 1001, 1003, 10, 2, 100, 20, 20, 20, 20, true
        );
        ISwapVM.Order memory order = builder.BuildAquaStrategy(
            maker, address(pricing), pricing.register(config), 101
        );

        deal(WETH, maker, 10 ether);
        deal(USDC, user, 10_000e6);

        address[] memory tokens = new address[](2);
        tokens[0] = WETH;
        tokens[1] = USDC;

        uint256[] memory balances = new uint256[](2);
        balances[0] = 10 ether;

        vm.startPrank(maker);
        IERC20(WETH).approve(address(aqua), type(uint256).max);
        IERC20(USDC).approve(address(aqua), type(uint256).max);
        bytes32 shippedHash = aqua.ship(ROUTER, abi.encode(order), tokens, balances);
        vm.stopPrank();

        assertEq(shippedHash, router.hash(order));

        uint64 observedAtUs = uint64(block.timestamp * 1e6);
        bytes memory payload = abi.encodePacked(
            uint32(0x93c7d375), observedAtUs, uint8(0), uint8(2),
            _feed(1001, 2000e8, observedAtUs),
            _feed(1003, 1e8, observedAtUs)
        );
        (uint8 signatureV, bytes32 signatureR, bytes32 signatureS) = vm.sign(ORACLE_KEY, keccak256(payload));
        bytes memory report = abi.encodePacked(
            uint32(0x2a22999a), signatureR, signatureS, uint8(signatureV - 27), uint16(payload.length), payload
        );

        vm.deal(address(this), 1 ether);
        oracle.update{value: 1}(report);

        Executor.Trade memory trade = Executor.Trade(
            user, user, USDC, WETH, 1 ether, 2200e6, 1 ether,
            false, false, Executor.Funding.Permit2Witness, 0, block.timestamp + 60, address(0)
        );

        bytes32 permitTypeHash = keccak256(abi.encodePacked(
            "PermitWitnessTransferFrom(TokenPermissions permitted,address spender,uint256 nonce,uint256 deadline,",
            executor.WITNESS_TYPE_STRING()
        ));
        bytes32 tokenPermissionsHash = keccak256(abi.encode(
            keccak256("TokenPermissions(address token,uint256 amount)"), USDC, trade.maxInput
        ));
        bytes32 permitStructHash = keccak256(abi.encode(
            permitTypeHash, tokenPermissionsHash, address(executor), trade.nonce, trade.deadline,
            executor.witnessHash(trade, shippedHash)
        ));
        bytes32 permitDigest = keccak256(abi.encodePacked(
            "\x19\x01", IPermit2Domain(PERMIT2).DOMAIN_SEPARATOR(), permitStructHash
        ));

        (signatureV, signatureR, signatureS) = vm.sign(USER_KEY, permitDigest);

        vm.prank(user);
        IERC20(USDC).approve(PERMIT2, type(uint256).max);

        uint256 outputBalanceBeforeSwap = IERC20(WETH).balanceOf(user);
        (uint256 amountIn, uint256 amountOut) = executor.execute(
            order, trade, "", abi.encodePacked(signatureR, signatureS, signatureV)
        );

        assertEq(amountIn, 2004e6);
        assertEq(amountOut, 1 ether);
        assertEq(IERC20(WETH).balanceOf(user) - outputBalanceBeforeSwap, 1 ether);
        assertEq(IERC20(USDC).balanceOf(user), 10_000e6 - amountIn);
        assertEq(IERC20(USDC).balanceOf(address(executor)), 0);
    }

    function _feed(uint32 feedId, int64 price, uint64 observedAtUs) private pure returns (bytes memory) {
        return abi.encodePacked(
            feedId, uint8(4), uint8(0), price, uint8(4), int16(-8),
            uint8(5), uint64(0), uint8(12), uint8(1), observedAtUs
        );
    }
}
