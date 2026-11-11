// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

/// @notice Pyth Lazer EVM verifier entry points consumed by this project.
interface IPythLazer {
    function verification_fee() external view returns (uint256);
    function verifyUpdate(bytes calldata update) external payable returns (bytes memory payload, address signer);
}
