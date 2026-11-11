// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IPythLazer} from "./interfaces/IPythLazer.sol";

/// @notice Caches authenticated Pyth Lazer prices; freshness follows each feed's own timestamp.
contract PythPriceAdapter {
    struct Price {
        uint256 valueE18;
        uint256 confidenceE18;
        uint64 observedAtUs;
        uint64 updatedBlock;
    }

    IPythLazer public immutable verifier;
    uint64 public immutable futureToleranceUs;
    mapping(uint32 feedId => Price) public prices;

    error InvalidReport();
    error InvalidPrice();
    error InvalidFee();
    error PriceUnavailable(uint32 feedId);
    error FutureObservation();
    event PriceUpdated(uint32 indexed feedId, uint256 valueE18, uint64 observedAtUs, uint256 blockNumber);

    /// @param verifier_ Pyth Lazer verifier; immutable for this adapter.
    /// @param futureToleranceUs_ Permitted difference ahead of the block timestamp, in microseconds.
    constructor(IPythLazer verifier_, uint64 futureToleranceUs_) {
        require(address(verifier_).code.length != 0 && futureToleranceUs_ <= 2_000_000, InvalidReport());
        verifier = verifier_;
        futureToleranceUs = futureToleranceUs_;
    }

    /// @notice Returns the verifier's current native-token verification fee.
    function verificationFee() external view returns (uint256) { return verifier.verification_fee(); }

    /// @notice Verifies an EVM envelope and accepts strictly newer feed observations.
    /// @dev Payload schema: magic, header timestamp, channel, count; price/exponent/confidence/feed timestamp.
    function update(bytes calldata envelope) external payable {
        require(msg.value == verifier.verification_fee(), InvalidFee());
        (bytes memory payload,) = verifier.verifyUpdate{value: msg.value}(envelope);
        require(payload.length >= 14 && _read(payload, 0, 4) == 0x93c7d375, InvalidReport());
        uint256 count = _read(payload, 13, 1);
        require(count != 0, InvalidReport());
        uint256 pos = 14;
        for (uint256 i; i < count; ++i) {
            uint32 id = uint32(_read(payload, pos, 4));
            require(_read(payload, pos + 4, 1) == 4, InvalidReport());
            pos += 5;
            int64 rawPrice;
            int16 exponent;
            uint64 confidence;
            uint64 observed;
            uint256 seen;
            for (uint256 j; j < 4; ++j) {
                uint256 property = _read(payload, pos++, 1);
                uint256 bit;
                if (property == 0) {
                    bit = 1; rawPrice = int64(uint64(_read(payload, pos, 8))); pos += 8;
                } else if (property == 4) {
                    bit = 2; exponent = int16(uint16(_read(payload, pos, 2))); pos += 2;
                } else if (property == 5) {
                    bit = 4; confidence = uint64(_read(payload, pos, 8)); pos += 8;
                } else if (property == 12) {
                    bit = 8;
                    require(_read(payload, pos++, 1) == 1, InvalidReport());
                    observed = uint64(_read(payload, pos, 8)); pos += 8;
                } else revert InvalidReport();
                require(seen & bit == 0, InvalidReport());
                seen |= bit;
            }
            require(seen == 15 && rawPrice > 0 && observed != 0, InvalidPrice());
            require(uint256(observed) <= block.timestamp * 1e6 + futureToleranceUs, FutureObservation());
            uint256 value = _scale(uint64(rawPrice), exponent);
            require(value != 0, InvalidPrice());
            if (observed > prices[id].observedAtUs) {
                prices[id] = Price(value, _scale(confidence, exponent), observed, uint64(block.number));
                emit PriceUpdated(id, value, observed, block.number);
            }
        }
        require(pos == payload.length, InvalidReport());
    }

    /// @notice Returns quote-token units per base token, scaled by 1e18.
    /// @dev Both feeds must share a numeraire (e.g. USD); each is checked independently.
    /// @param baseFeedId Feed for the base token in the common numeraire.
    /// @param quoteFeedId Feed for the quote token in the common numeraire.
    /// @param maxAgeSeconds Maximum age of each authenticated observation.
    /// @param maxSkewSeconds Maximum difference between the two observation timestamps.
    /// @param maxConfidenceBps Maximum Pyth-reported confidence/price ratio per feed, in basis points.
    /// @param requireCurrentBlock Whether both cached feeds must have advanced in this block.
    /// @return priceE18 Quote-token units per base token, scaled by 1e18.
    function priceInQuote(
        uint32 baseFeedId, uint32 quoteFeedId, uint32 maxAgeSeconds, uint32 maxSkewSeconds,
        uint16 maxConfidenceBps, bool requireCurrentBlock
    ) external view returns (uint256 priceE18) {
        Price memory base = _checked(baseFeedId, maxAgeSeconds, maxConfidenceBps, requireCurrentBlock);
        Price memory quote = _checked(quoteFeedId, maxAgeSeconds, maxConfidenceBps, requireCurrentBlock);
        uint256 skew = base.observedAtUs > quote.observedAtUs
            ? base.observedAtUs - quote.observedAtUs : quote.observedAtUs - base.observedAtUs;
        require(skew <= uint256(maxSkewSeconds) * 1e6, InvalidReport());
        return Math.mulDiv(base.valueE18, 1e18, quote.valueE18);
    }

    function _checked(uint32 id, uint32 age, uint16 confidenceBps, bool sameBlock) private view returns (Price memory p) {
        p = prices[id];
        uint256 nowUs = block.timestamp * 1e6;
        require(p.valueE18 != 0 && (!sameBlock || p.updatedBlock == block.number), PriceUnavailable(id));
        require(p.observedAtUs <= nowUs + futureToleranceUs, PriceUnavailable(id));
        require(p.observedAtUs >= nowUs || nowUs - p.observedAtUs <= uint256(age) * 1e6, PriceUnavailable(id));
        require(p.confidenceE18 <= Math.mulDiv(p.valueE18, confidenceBps, 10_000), PriceUnavailable(id));
    }

    function _scale(uint64 value, int16 exponent) private pure returns (uint256) {
        require(exponent >= -18 && exponent <= 18, InvalidPrice());
        return uint256(value) * 10 ** uint256(int256(exponent) + 18);
    }

    function _read(bytes memory data, uint256 pos, uint256 size) private pure returns (uint256 value) {
        require(pos + size <= data.length, InvalidReport());
        assembly ("memory-safe") { value := shr(sub(256, mul(size, 8)), mload(add(add(data, 32), pos))) }
    }
}
