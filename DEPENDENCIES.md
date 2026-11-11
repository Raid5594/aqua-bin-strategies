# Pinned dependencies

Solidity dependencies are vendored so the production API and opcode mapping cannot drift. Their original license headers and license files are retained. No dependency source was modified.

| Dependency | Version / commit | Location |
|---|---|---|
| SwapVM production release | v1.0.2 / `32c687c2b73101fc26549e48fa1ff8a4d73afbac` | `lib/swap-vm` |
| Aqua matching release lockfile | `b51f3b6e3c02fa5208e1429f0f14706b025d9dd6` | `lib/aqua` |
| 1inch solidity-utils | 6.9.7, npm archive | `lib/solidity-utils` |
| OpenZeppelin contracts | 5.4.0, npm archive | `lib/openzeppelin` |
| forge-std | v1.11.0 | `lib/forge-std` |
| Solidity | 0.8.30 (`73712a01`) | compiler installed under `tools/` |
| ethers | 6.13.4 | `package-lock.json` |

The unmodified `test/utils/ProgramBuilder.sol` from the same SwapVM commit is also vendored to resolve instruction identifiers directly from its opcode table.

SwapVM source was extracted with `git archive` from the pinned commit. Aqua and forge-std came from GitHub archives; solidity-utils and OpenZeppelin came from their exact-version npm archives. The dependency choices follow the production SwapVM release manifest/lockfile. The compiler installer verifies the official distribution's SHA-256 before making the binary executable.

The production Ethereum router is `0x111111338c5091e8440b67b168bae16a668ac0de`. Its 18 verified `src/` files matched the pinned SwapVM commit during the preceding architecture exercise. `test/MainnetFork.t.sol` additionally tests actual production settlement and real Permit2 witness verification on a local Ethereum fork.

The contracts in `test/mocks` are test infrastructure. The mock Pyth verifier authenticates the real compact envelope format with a local test signer; it is not a production oracle. The Permit2 mock follows the production witness hashing boundary but does not reproduce every Permit2 feature. The optional fork test uses real Permit2 bytecode instead.
