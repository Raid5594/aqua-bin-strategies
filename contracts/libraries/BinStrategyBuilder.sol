// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ISwapVM} from "swap-vm/interfaces/ISwapVM.sol";
import {MakerTraitsLib} from "swap-vm/libs/MakerTraits.sol";
import {AquaOpcodes} from "swap-vm/opcodes/AquaOpcodes.sol";
import {Controls, ControlsArgsBuilder} from "swap-vm/instructions/Controls.sol";
import {Extruction} from "swap-vm/instructions/Extruction.sol";
import {Program, ProgramBuilder} from "swap-vm-test/utils/ProgramBuilder.sol";

/// @notice Encodes bin strategies for the pinned production Aqua SwapVM release.
/// @dev Encoding helper only; this contract never holds funds or participates in settlement.
contract BinStrategyBuilder is AquaOpcodes {
    using ProgramBuilder for Program;

    /// @dev Aqua is unused when resolving instruction identifiers for encoding.
    constructor() AquaOpcodes(address(0)) {}

    /// @notice Builds a complete Aqua order containing Salt followed by Extruction.
    /// @param maker LP whose Aqua position supplies liquidity.
    /// @param pricing Pricing implementation invoked by the strategy.
    /// @param configHash Hash of the immutable configuration registered with pricing.
    /// @param salt Distinguishes otherwise identical positions and their curve state.
    /// @return order Complete order to encode and ship to Aqua.
    function BuildAquaStrategy(address maker, address pricing, bytes32 configHash, uint64 salt)
        external pure returns (ISwapVM.Order memory order) {
        Program memory program = ProgramBuilder.init(_opcodes());
        MakerTraitsLib.Args memory args;
        args.maker = maker;
        args.useAquaInsteadOfSignature = true;
        args.program = bytes.concat(
            program.build(Controls._salt, ControlsArgsBuilder.buildSalt(salt)),
            program.build(Extruction._extruction, abi.encodePacked(pricing, configHash))
        );
        return MakerTraitsLib.build(args);
    }
}
