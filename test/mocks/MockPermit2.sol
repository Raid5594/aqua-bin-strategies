// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPermit2} from "../../contracts/interfaces/IPermit2.sol";

/// @dev Test implementation of Permit2's witness hash and spender/nonce authorization boundary.
contract MockPermit2 is IPermit2 {
    bytes32 private constant TOKEN_HASH = keccak256("TokenPermissions(address token,uint256 amount)");

    mapping(address => mapping(address => mapping(address => uint160))) public allowances;
    mapping(address => mapping(uint256 => bool)) public spent;

    function approve(address token, address spender, uint160 amount) external {
        allowances[msg.sender][token][spender] = amount;
    }

    function transferFrom(address from, address to, uint160 amount, address token) external {
        uint160 availableAllowance = allowances[from][token][msg.sender];
        require(availableAllowance >= amount, "permit2 allowance");

        allowances[from][token][msg.sender] -= amount;
        require(IERC20(token).transferFrom(from, to, amount));
    }

    function digest(PermitTransferFrom calldata permit, address spender, bytes32 witness, string calldata witnessTypeString)
        external view returns (bytes32) {
        return _digest(permit, spender, witness, witnessTypeString);
    }

    function permitWitnessTransferFrom(
        PermitTransferFrom calldata permit,
        SignatureTransferDetails calldata transferDetails,
        address owner,
        bytes32 witness,
        string calldata witnessTypeString,
        bytes calldata signature
    ) external {
        require(permit.deadline >= block.timestamp && !spent[owner][permit.nonce], "deadline/nonce");
        require(transferDetails.requestedAmount <= permit.permitted.amount, "amount");
        require(
            ECDSA.recover(_digest(permit, msg.sender, witness, witnessTypeString), signature) == owner,
            "witness signature"
        );

        spent[owner][permit.nonce] = true;
        require(IERC20(permit.permitted.token).transferFrom(owner, transferDetails.to, transferDetails.requestedAmount));
    }

    function _digest(PermitTransferFrom calldata permit, address spender, bytes32 witness, string calldata witnessTypeString)
        private view returns (bytes32) {
        bytes32 typeHash = keccak256(abi.encodePacked(
            "PermitWitnessTransferFrom(TokenPermissions permitted,address spender,uint256 nonce,uint256 deadline,",
            witnessTypeString
        ));
        bytes32 domainSeparator = keccak256(abi.encode(
            keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)"),
            keccak256("Permit2"), block.chainid, address(this)
        ));
        bytes32 permitStructHash = keccak256(abi.encode(
            typeHash, keccak256(abi.encode(TOKEN_HASH, permit.permitted.token, permit.permitted.amount)),
            spender, permit.nonce, permit.deadline, witness
        ));

        return keccak256(abi.encodePacked("\x19\x01", domainSeparator, permitStructHash));
    }
}
