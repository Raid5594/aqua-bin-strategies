# Aqua Bin Strategies

A proof of concept for market makers who want to quote both sides of a market at a configurable distance from an oracle price, using [1inch Aqua](https://github.com/1inch/aqua) and [SwapVM](https://github.com/1inch/swap-vm).

Instead of committing to a fixed ETH price, a maker can commit to rules such as:

> Sell ETH at spot + 0.2%, and buy ETH at spot − 0.2%, while inventory is available and the oracle observations meet my freshness requirements.

The same strategy can use a spread that changes linearly with the amount traded.

This project demonstrates pricing and settlement locally. The custom contracts are not deployed or audited, and live Pyth updates are not yet integrated end to end.

## How pricing works

The **base token** is the asset being bought or sold, such as WETH. The **quote token** is what its price is expressed in, such as USDC. Buy and sell always refer to the maker's side of the trade.

For a spot price of 2,000 USDC per ETH:

| Maker's rule | Price |
|---|---:|
| Sell at spot + 0.2% | 2,004 USDC per ETH |
| Buy at spot − 0.2% | 1,996 USDC per ETH |

Spot comes from two authenticated Pyth feeds: base/USD divided by quote/USD. USDC is therefore priced from its own feed rather than assumed to equal one dollar.

A maker can choose a fixed spread or a line between two endpoints:

| Direction | Fixed example | Variable example |
|---|---|---|
| Maker sells base | 0.2% → 0.2% markup | 0.1% → 0.3% markup |
| Maker buys base | 0.2% → 0.2% discount | 0.3% → 0.1% discount |

The endpoints describe the **marginal price** as inventory is consumed. A fill pays the average across the portion it traverses, rather than the final price applied to the whole fill.

For example, with 10 ETH available and a sell markup of 0.1% → 0.3%, buying the first 5 ETH traverses 0.1% → 0.2%. At an unchanged spot of 2,000 USDC, the average markup is 0.15%, and the fill costs **10,015 USDC**.

Despite the project name, this implementation uses a continuous linear spread schedule, not a collection of discrete price buckets.

## Inventory and transaction boundaries

Aqua records how much of the maker's wallet inventory a shipped strategy may use. Tokens remain in the maker's wallet until settlement; the maker grants Aqua an allowance to transfer them. Allocations do not reserve exclusive ownership of wallet balances across strategies.

Each direction snapshots its available capacity on its first fill in a transaction:

- Multiple fills of the same strategy and direction in one transaction continue along the same line. Splitting a fill does not restart the spread.
- A new transaction starts again at the configured starting spread using the inventory then available, even if it is mined in the same block.
- Proceeds from one direction are immediately available for the opposite direction.
- If opposite-side fills replenish a direction after its original capacity is exhausted, the extra volume trades at that direction's terminal spread until the transaction ends.

This behavior is enforced on-chain using transaction-scoped transient storage.

## What the maker commits to

The maker registers a configuration containing the pair, oracle feed IDs, spread endpoints and oracle acceptance rules. The configuration is immutable and identified by its hash.

A short SwapVM program references the pricing contract and that configuration hash. The maker encodes the complete order and **ships it to Aqua** with token allocations. This authorizes that specific strategy; the maker does not separately sign an Aqua order for every fill.

Changing the configuration or pricing address changes the strategy hash. A taker cannot substitute different rules and spend against the original allocation. To stop a position, the maker docks it in Aqua. Changing its rules requires a new configuration and strategy.

## How a swap executes

1. A taker or solver obtains a quote and sets the trade amount, recipient and price limits.
2. When needed, a signed Pyth update is submitted and verified before entering SwapVM. A qualifying cached update can be reused across fills.
3. The Aqua router loads the allocation for the supplied strategy and executes its program.
4. The program calls `SpreadPricing`, which checks the pair and oracle observations, then calculates the fill and advances the transaction's consumption position.
5. The router settles through Aqua. An invalid price observation, insufficient allocation or breached trade limit reverts the swap.

Both exact-input and exact-output trades are supported. Requests exceeding available liquidity revert rather than being automatically reduced.

The included executor can combine price updates, funding and several fills in one transaction. It supports ERC-20 allowances, Permit2 and native ETH wrapping/refunds. For relayed user funding, it verifies a signed trade authorization or uses a Permit2 witness. It is custom integration code, not a universal 1inch executor; existing solver infrastructure can replace it.

## Oracle acceptance rules

The maker chooses when an observation is acceptable:

- **Age:** how old each underlying feed observation may be.
- **Same-block update:** optionally require both cached feeds to have accepted newer observations in the current block. Re-submitting an identical observation does not refresh this marker.
- **Timestamp skew:** how far apart the two underlying observations may be.
- **Confidence:** the maximum Pyth-reported uncertainty relative to each feed's price.

The test configurations require same-block updates, a maximum age of 10 seconds, a maximum timestamp difference of 2 seconds and a confidence limit of 1% per feed. These are test settings, not recommendations for a live market. Oracle acceptance checks do not guarantee that a maker can hedge profitably elsewhere.

## Code to explore

| Component | Responsibility |
|---|---|
| [SpreadPricing](contracts/SpreadPricing.sol) | The core strategy: committed configuration, pricing rules and transaction-level consumption |
| [PythPriceAdapter](contracts/PythPriceAdapter.sol) | Verifies signed price updates and checks cached observations |
| [Executor](contracts/Executor.sol) | Optional update, user authorization, funding, swap and refund flow |
| [BinStrategyBuilder](contracts/libraries/BinStrategyBuilder.sol) | Generates the SwapVM order used when shipping a strategy; no production deployment is needed for encoding |
| [Strategy tests](test/Strategies.t.sol) | Examples of fixed/variable spreads, both directions, funding and failure cases |
| [Inverse tests](test/SpreadPricingInverse.t.sol) | Integer rounding and quadratic inversion checked against a binary-search reference |

Settlement targets the five-argument Aqua router interface from SwapVM v1.0.2. Dependencies are pinned; see [DEPENDENCIES.md](DEPENDENCIES.md).

## Run locally

```sh
npm ci --ignore-scripts
npm test
```

The tests exercise real SwapVM/Aqua contract code locally, with mocked oracle authentication. The integration test starts a temporary Anvil node and checks that fills share consumption within one transaction but reset across separate transactions in the same block.

An optional Ethereum fork test exercises deployed Aqua, SwapVM and Permit2 code without broadcasting transactions:

```sh
MAINNET_RPC_URL=https://your-ethereum-rpc forge test --match-contract MainnetForkTest -vv
```

Its Pyth verifier is still a local mock. Without an RPC URL, this test is skipped.

## Current scope

There are no protocol fees in this PoC; gas and oracle verification fees still apply. A live price-fetching service, genuine Pyth report integration, discovery/routing integration and a user interface remain outside the implementation.

Local feed IDs are synthetic. A live setup needs verified token/feed mappings and an authentic report tested against the intended Pyth verifier. Using BTC/USD for WBTC also assumes WBTC tracks BTC; it does not measure a WBTC-specific depeg.

Tokens are limited to at most 18 decimals. Fee-on-transfer and rebasing tokens are unsupported. The contracts and tests are a starting point for evaluating the design, not production-ready deployment instructions.
