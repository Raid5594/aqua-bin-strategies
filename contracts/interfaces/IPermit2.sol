// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

/// @notice Production Permit2 interface subset used by the executor.
interface IPermit2 {
    struct TokenPermissions { address token; uint256 amount; }
    struct PermitTransferFrom { TokenPermissions permitted; uint256 nonce; uint256 deadline; }
    struct SignatureTransferDetails { address to; uint256 requestedAmount; }
    function transferFrom(address from, address to, uint160 amount, address token) external;
    function permitWitnessTransferFrom(
        PermitTransferFrom calldata permit, SignatureTransferDetails calldata transferDetails,
        address owner, bytes32 witness, string calldata witnessTypeString, bytes calldata signature
    ) external;
}
