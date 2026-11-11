// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IPythLazer} from "../../contracts/interfaces/IPythLazer.sol";

/// @dev Test verifier authenticating the same 71-byte EVM envelope as Pyth Lazer.
contract MockPythLazer is IPythLazer {
    address public immutable trustedSigner;
    uint256 public constant override verification_fee = 1;

    constructor(address signer) {
        trustedSigner = signer;
    }

    function verifyUpdate(bytes calldata updateData) external payable override returns (bytes memory payload, address signer) {
        require(msg.value == verification_fee && updateData.length >= 71, "fee/length");
        require(bytes4(updateData[0:4]) == bytes4(uint32(0x2a22999a)), "magic");

        uint256 payloadLength = uint16(bytes2(updateData[69:71]));
        require(updateData.length == 71 + payloadLength, "payload length");

        payload = updateData[71:];
        signer = ECDSA.recover(
            keccak256(payload), uint8(updateData[68]) + 27,
            bytes32(updateData[4:36]), bytes32(updateData[36:68])
        );

        require(signer == trustedSigner, "signature");
    }
}
