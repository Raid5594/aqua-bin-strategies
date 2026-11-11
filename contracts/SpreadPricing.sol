// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IERC20Metadata} from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import {SwapQuery, SwapRegisters} from "swap-vm/libs/VM.sol";
import {PythPriceAdapter} from "./PythPriceAdapter.sol";

/// @notice Oracle-relative directional curves for the production v1.0.2 Extruction interface.
/// @dev Consumption is transient per order and direction: shared within a transaction, reset afterward.
contract SpreadPricing {
    uint256 private constant WAD = 1e18;

    struct Config {
        // Sell/buy directions and curve volume are defined relative to baseToken.
        address baseToken;
        address quoteToken;
        // Normalize raw token amounts to 18 decimals.
        // Fixed at registration to 10 ** (18 - token.decimals()).
        uint256 baseRate;
        uint256 quoteRate;
        // Both feeds must be denominated in the same numeraire, e.g. USD.
        uint32 baseFeedId;
        uint32 quoteFeedId;
        uint32 maxAgeSeconds;
        // Maximum difference between the two authenticated Pyth feed observation timestamps.
        uint32 maxSkewSeconds;
        // Pyth-specific uncertainty filter: maximum reported confidence/price ratio per feed, in basis points.
        uint16 maxConfidenceBps;
        uint16 sellStartBps;
        uint16 sellEndBps;
        uint16 buyStartBps;
        uint16 buyEndBps;
        bool requireCurrentBlock;
    }

    address public immutable router;
    PythPriceAdapter public immutable oracle;
    mapping(bytes32 => Config) private configs;

    error InvalidConfig();
    error InvalidCaller(address caller);
    error InvalidPair();
    error InsufficientLiquidity();
    error Dust();
    event ConfigRegistered(bytes32 indexed configHash, address indexed baseToken, address indexed quoteToken);

    /// @param router_ Production-compatible router allowed to invoke the stateful pricing path.
    /// @param oracle_ Immutable authenticated Pyth cache.
    constructor(address router_, PythPriceAdapter oracle_) {
        require(router_.code.length != 0 && address(oracle_).code.length != 0, InvalidConfig());
        router = router_; oracle = oracle_;
    }

    /// @notice Registers a configuration that can never be edited.
    function register(Config calldata config) external returns (bytes32 id) {
        require(config.baseToken != config.quoteToken && config.baseFeedId != config.quoteFeedId, InvalidConfig());
        // Observations must have a positive age limit capped at 60 seconds by this PoC.
        // Their mutual timestamp skew cannot exceed that configured age window.
        require(config.maxAgeSeconds > 0 && config.maxAgeSeconds <= 60 && config.maxSkewSeconds <= config.maxAgeSeconds, InvalidConfig());
        // Pyth confidence/price is bounded to at most 100% (10,000 bps).
        // Maker sell markups may stay flat or increase with volume; both remain below 100%.
        require(config.maxConfidenceBps <= 10_000 && config.sellStartBps <= config.sellEndBps && config.sellEndBps < 10_000, InvalidConfig());
        // Maker buy discounts may stay flat or decrease with volume. A discount below
        // 100% keeps the bid positive; the ordering also bounds buyEndBps below 100%.
        require(config.buyStartBps >= config.buyEndBps && config.buyStartBps < 10_000, InvalidConfig());

        uint8 baseDecimals = IERC20Metadata(config.baseToken).decimals();
        uint8 quoteDecimals = IERC20Metadata(config.quoteToken).decimals();
        require(baseDecimals <= 18 && quoteDecimals <= 18, InvalidConfig());
        require(config.baseRate == 10 ** (18 - baseDecimals)
            && config.quoteRate == 10 ** (18 - quoteDecimals), InvalidConfig());
            
        id = keccak256(abi.encode(config));
        if (configs[id].baseRate == 0) {
            configs[id] = config;
            emit ConfigRegistered(id, config.baseToken, config.quoteToken);
        }
    }

    /// @notice Returns the immutable configuration committed to by a strategy.
    function config(bytes32 id) external view returns (Config memory) { return configs[id]; }

    /// @notice Prices a fill; preserves nextPC, fee register, balances, and taker argument stream.
    /// @dev The router invokes the same selector through STATICCALL in quote mode.
    function extruction(
        bool isStaticContext, uint256 nextPC, SwapQuery calldata query,
        SwapRegisters calldata swap, bytes calldata args, bytes calldata
    ) external returns (uint256, uint256, SwapRegisters memory result) {
        require(msg.sender == router, InvalidCaller(msg.sender));
        require(args.length == 32, InvalidConfig());

        bytes32 id = abi.decode(args, (bytes32));
        Config storage config = configs[id];

        require(config.baseRate != 0, InvalidConfig());
        // Directions are from the maker's perspective: selling base receives quote.
        bool sell = query.tokenIn == config.quoteToken && query.tokenOut == config.baseToken;
        // Accept only the configured pair: quote -> base (maker sells), or
        // base -> quote (maker buys). Reject every other token combination.
        require(sell || (query.tokenIn == config.baseToken && query.tokenOut == config.quoteToken), InvalidPair());

        uint256 price = oracle.priceInQuote(config.baseFeedId, config.quoteFeedId, config.maxAgeSeconds,
            config.maxSkewSeconds, config.maxConfidenceBps, config.requireCurrentBlock);
        // Convert quote/base whole-token price to raw quote units per whole base token.
        uint256 priceRaw = price / config.quoteRate;
        uint256 baseScale = WAD / config.baseRate;
        require(priceRaw > 0 && swap.balanceOut > 0, InsufficientLiquidity());
        bytes32 key = keccak256(abi.encode(query.orderHash, sell));
        (bool initialized, uint256 capacity, uint256 consumed) = _load(key);
        if (!initialized) {
            capacity = sell ? swap.balanceOut : Math.mulDiv(swap.balanceOut, baseScale, priceRaw);
        }
        require(capacity > 0 && capacity <= type(uint128).max, InsufficientLiquidity());

        uint256 start = uint256(sell ? config.sellStartBps : config.buyStartBps) * 1e14;
        uint256 end = uint256(sell ? config.sellEndBps : config.buyEndBps) * 1e14;
        result = swap;
        uint256 volume;

        if (sell) {
            if (query.isExactIn) {
                require(swap.amountIn <= _delta(consumed, swap.balanceOut, capacity, start, end, true, priceRaw, baseScale), InsufficientLiquidity());
                volume = _inverse(swap.amountIn, swap.balanceOut, consumed, capacity, start, end, true, priceRaw, baseScale, false);
                result.amountOut = volume;
            } else {
                volume = swap.amountOut;
                require(volume <= swap.balanceOut, InsufficientLiquidity());
                result.amountIn = _delta(consumed, volume, capacity, start, end, true, priceRaw, baseScale);
            }
        } else {
            if (query.isExactIn) {
                volume = swap.amountIn;
                result.amountOut = _delta(consumed, volume, capacity, start, end, false, priceRaw, baseScale);
                require(result.amountOut <= swap.balanceOut, InsufficientLiquidity());
            } else {
                require(swap.amountOut <= swap.balanceOut, InsufficientLiquidity());
                uint256 upper = Math.mulDiv(swap.amountOut, baseScale * WAD, priceRaw * (WAD - start), Math.Rounding.Ceil);
                volume = _inverse(swap.amountOut, upper, consumed, capacity, start, end, false, priceRaw, baseScale, true);
                result.amountIn = volume;
            }
        }
        
        require(volume > 0 && result.amountIn > 0 && result.amountOut > 0, Dust());
        require(consumed + volume <= type(uint128).max, InsufficientLiquidity());
        // Preserve this direction's original capacity and advance its curve cursor for
        // later calls in the same transaction. Transient storage resets at transaction end.
        // Quotes can read the cursor but must not advance it (or write under STATICCALL).
        if (!isStaticContext) _save(key, capacity, consumed + volume);
        return (nextPC, 0, result);
    }

    /// @dev Inverts cumulative quote rounding first, then the piecewise quadratic integral.
    ///      minimum=false returns the largest affordable base output; minimum=true returns
    ///      the smallest base input producing the requested quote output.
    function _inverse(uint256 target, uint256 high, uint256 consumed, uint256 capacity, uint256 start,
        uint256 end, bool sell, uint256 p, uint256 unit, bool minimum) internal pure returns (uint256) {
        require(consumed + high <= type(uint128).max, InsufficientLiquidity());
        if (minimum && target == 0) return 0;
        uint256 previous = _total(consumed, capacity, start, end, sell, p, unit);
        uint256 available = _total(consumed + high, capacity, start, end, sell, p, unit) - previous;
        if (target >= available) {
            require(!minimum || target == available, InsufficientLiquidity());
            if (!minimum) return high;
        }

        // ceil(F*p/D) <= Q iff F <= floor(Q*D/p), for maker sells.
        // floor(F*p/D) >= Q iff F >= ceil(Q*D/p), for maker buys.
        uint256 adjustedTarget = Math.mulDiv(previous + target, unit * WAD, p,
            minimum ? Math.Rounding.Ceil : Math.Rounding.Floor);
        uint256 a = sell ? WAD + start : WAD - start;
        uint256 d = sell ? end - start : start - end;
        uint256 totalVolume;
        if (d == 0) {
            totalVolume = minimum ? Math.ceilDiv(adjustedTarget, a) : adjustedTarget / a;
        } else {
            uint256 atCapacity = _adjustedTotal(capacity, capacity, start, end, sell);
            if (adjustedTarget >= atCapacity) {
                uint256 terminal = sell ? WAD + end : WAD - end;
                uint256 remainder = adjustedTarget - atCapacity;
                totalVolume = capacity + (minimum ? Math.ceilDiv(remainder, terminal) : remainder / terminal);
            } else {
                totalVolume = _quadraticVolume(adjustedTarget, capacity, a, d, minimum);
            }
        }
        return Math.min(totalVolume - consumed, high);
    }

    /// @dev On the original line, F(v) = a*v + floor(d*v*v/(2*capacity)) for both directions.
    ///      Solve its continuous quadratic with OZ sqrt, using the rationalized positive root
    ///      2*t / (a + sqrt(a*a + 2*d*t/capacity)) to avoid subtracting nearly equal numbers.
    function _quadraticVolume(uint256 target, uint256 capacity, uint256 a, uint256 d, bool minimum)
        private pure returns (uint256 volume) {
        // floor(H) <= target iff H < target+1; floor(H) >= target iff H >= target.
        uint256 t = minimum ? target : target + 1;
        uint256 root = Math.sqrt(a * a + Math.mulDiv(2 * d, t, capacity));
        volume = Math.min(Math.mulDiv(2, t, a + root), capacity);

        // The WAD-scaled sqrt is rounded down. Refine its upper estimate using the
        // exact integral and derivative; mulDiv retains precision for uint128 volumes.
        // Three refinements suffice with the configured basis-point coefficients.
        for (uint256 i; i < 3; ++i) {
            uint256 value = a * volume + Math.mulDiv(d, volume * volume, 2 * capacity);
            if (value <= t) break;
            uint256 step = Math.mulDiv(value - t, capacity, a * capacity + d * volume);
            if (step == 0) break;
            volume -= step;
        }

        // Resolve the remaining neighboring raw units against the integer integral.
        // These are rounding corrections, not a search over the inventory interval.
        if (minimum) {
            while (volume > 0 && _quadraticTotal(volume - 1, capacity, a, d) >= target) --volume;
            while (_quadraticTotal(volume, capacity, a, d) < target) ++volume;
        } else {
            while (_quadraticTotal(volume, capacity, a, d) > target) --volume;
            while (volume < capacity && _quadraticTotal(volume + 1, capacity, a, d) <= target) ++volume;
        }
    }

    function _quadraticTotal(uint256 volume, uint256 capacity, uint256 a, uint256 d)
        private pure returns (uint256) {
        return a * volume + Math.mulDiv(d, volume * volume, 2 * capacity);
    }

    function _delta(uint256 consumed, uint256 q, uint256 capacity, uint256 start, uint256 end,
        bool sell, uint256 p, uint256 unit) internal pure returns (uint256) {
        require(consumed + q <= type(uint128).max, InsufficientLiquidity());
        return _total(consumed + q, capacity, start, end, sell, p, unit)
            - _total(consumed, capacity, start, end, sell, p, unit);
    }

    function _total(uint256 v, uint256 capacity, uint256 start, uint256 end, bool sell, uint256 p, uint256 unit)
        internal pure returns (uint256) {
        uint256 adjusted = _adjustedTotal(v, capacity, start, end, sell);
        return Math.mulDiv(adjusted, p, unit * WAD, sell ? Math.Rounding.Ceil : Math.Rounding.Floor);
    }

    function _adjustedTotal(uint256 v, uint256 capacity, uint256 start, uint256 end, bool sell)
        private pure returns (uint256) {
        uint256 r = Math.min(v, capacity);
        uint256 area = start * r;
        if (end >= start) area += Math.mulDiv(end - start, r * r, 2 * capacity);
        else area -= Math.mulDiv(start - end, r * r, 2 * capacity);
        area += end * (v - r); // Replenishment after exhaustion continues at the terminal spread.
        return sell ? v * WAD + area : v * WAD - area;
    }

    function _load(bytes32 key) private view returns (bool initialized, uint256 capacity, uint256 consumed) {
        bytes32 k0 = keccak256(abi.encode(key, uint256(0)));
        bytes32 k1 = keccak256(abi.encode(key, uint256(1)));
        bytes32 k2 = keccak256(abi.encode(key, uint256(2)));
        assembly ("memory-safe") { initialized := tload(k0) capacity := tload(k1) consumed := tload(k2) }
    }

    /// @dev EIP-1153 state belongs to this pricing contract and is shared across its calls
    ///      in one transaction. The key isolates each order hash and maker direction;
    ///      call reverts roll back writes, and transaction completion clears all slots.
    function _save(bytes32 key, uint256 capacity, uint256 consumed) private {
        bytes32 k0 = keccak256(abi.encode(key, uint256(0)));
        bytes32 k1 = keccak256(abi.encode(key, uint256(1)));
        bytes32 k2 = keccak256(abi.encode(key, uint256(2)));
        assembly ("memory-safe") { tstore(k0, 1) tstore(k1, capacity) tstore(k2, consumed) }
    }
}
