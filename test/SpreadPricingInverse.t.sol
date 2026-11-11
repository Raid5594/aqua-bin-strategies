// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Test} from "forge-std/Test.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {SpreadPricing} from "../contracts/SpreadPricing.sol";
import {PythPriceAdapter} from "../contracts/PythPriceAdapter.sol";

contract InverseHarness is SpreadPricing {
    struct Params {
        uint256 high;
        uint256 consumed;
        uint256 capacity;
        uint256 start;
        uint256 end;
        bool sell;
        uint256 price;
        uint256 unit;
    }

    constructor(address codeAddress) SpreadPricing(codeAddress, PythPriceAdapter(codeAddress)) {}

    function inverse(uint256 target, Params memory c) external pure returns (uint256) {
        return _inverse(target, c.high, c.consumed, c.capacity, c.start, c.end, c.sell, c.price, c.unit, !c.sell);
    }

    function delta(uint256 volume, Params memory c) external pure returns (uint256) {
        return _delta(c.consumed, volume, c.capacity, c.start, c.end, c.sell, c.price, c.unit);
    }

    // Previous implementation retained only as an independent inversion reference and gas baseline.
    function binaryReference(uint256 target, Params memory c) external pure returns (uint256) {
        uint256 low;
        uint256 high = c.high;
        while (low < high) {
            uint256 mid = !c.sell ? low + (high - low) / 2 : low + (high - low + 1) / 2;
            uint256 value = _delta(c.consumed, mid, c.capacity, c.start, c.end, c.sell, c.price, c.unit);
            if (!c.sell) { if (value >= target) high = mid; else low = mid + 1; }
            else { if (value <= target) low = mid; else high = mid - 1; }
        }
        return low;
    }
}

contract SpreadPricingInverseTest is Test {
    InverseHarness math;
    uint256 constant MAX_VOLUME = type(uint128).max;

    function setUp() public {
        math = new InverseHarness(address(this));
    }

    function _check(InverseHarness.Params memory c, uint256 target) internal view returns (uint256 result) {
        result = math.inverse(target, c);
        assertEq(result, math.binaryReference(target, c), "inverse differs from binary reference");
        if (c.sell) {
            assertLe(math.delta(result, c), target);
            if (result < c.high) assertGt(math.delta(result + 1, c), target);
        } else {
            assertGe(math.delta(result, c), target);
            if (result > 0) assertLt(math.delta(result - 1, c), target);
        }
    }

    function testFuzz_InverseMatchesReference(uint256 seed, uint128 inventory, uint128 position, uint16 fraction) public view {
        uint256 bits = uint256(keccak256(abi.encode(seed)));
        uint256 capacity = bound(inventory, 1, MAX_VOLUME);
        uint256 consumed = uint256(position) % MAX_VOLUME;
        // Exercise both the original quadratic segment and already-replenished inventory.
        if (bits & 1 == 0) consumed %= capacity;
        uint256 high = bound(uint128(bits), 1, MAX_VOLUME - consumed);
        uint256 a = (bits >> 128) % 10_000;
        uint256 b = (bits >> 160) % 10_000;
        uint256 lower = Math.min(a, b) * 1e14;
        uint256 upper = Math.max(a, b) * 1e14;
        uint256 price = 10 ** ((bits >> 192) % 25);
        uint256 unit = 10 ** ((bits >> 224) % 19);
        for (uint256 side; side < 2; ++side) {
            bool sell = side == 0;
            InverseHarness.Params memory c = InverseHarness.Params(high, consumed, capacity,
                sell ? lower : upper, sell ? upper : lower, sell, price, unit);
            uint256 maximum = math.delta(high, c);
            uint256 target = Math.mulDiv(maximum, fraction, type(uint16).max);
            _check(c, target);
        }
    }

    function test_DocumentedFiveEthExample() public view {
        InverseHarness.Params memory c = InverseHarness.Params(10 ether, 0, 10 ether, 10e14, 30e14, true, 2000e6, 1e18);
        assertEq(math.delta(5 ether, c), 10_015e6);
        assertEq(_check(c, 10_015e6), 5 ether);
    }

    function test_CapacityBoundaryAndTerminalReplenishment() public view {
        for (uint256 side; side < 2; ++side) {
            bool sell = side == 0;
            InverseHarness.Params memory c = InverseHarness.Params(12 ether, 4 ether, 10 ether,
                sell ? 10e14 : 30e14, sell ? 30e14 : 10e14, sell, 2000e6, 1e18);
            uint256 atBoundary = math.delta(6 ether, c);
            _check(c, atBoundary - 1);
            _check(c, atBoundary);
            _check(c, atBoundary + 1);
            _check(c, math.delta(9 ether, c));
            c.consumed = 12 ether;
            _check(c, math.delta(3 ether, c));
            c.end = c.start;
            _check(c, math.delta(3 ether, c));
        }
    }

    function test_ExtremeCapacityAndSpread() public view {
        for (uint256 side; side < 2; ++side) {
            bool sell = side == 0;
            InverseHarness.Params memory c = InverseHarness.Params(MAX_VOLUME, 0, MAX_VOLUME,
                sell ? 0 : 9999e14, sell ? 9999e14 : 0, sell, 1, 1e18);
            uint256 maximum = math.delta(c.high, c);
            _check(c, maximum / 2);
            _check(c, maximum - 1);
            _check(c, maximum);
            c.capacity = 1;
            _check(c, math.delta(c.high, c) / 2);
        }
    }

    function test_GasQuadraticVersusBinary() public {
        InverseHarness.Params memory c = InverseHarness.Params(10 ether, 0, 10 ether, 10e14, 30e14, true, 2000e6, 1e18);
        uint256 target = 10_015e6;
        // Warm both external calls before measuring the same inputs.
        math.inverse(target, c);
        math.binaryReference(target, c);
        uint256 before = gasleft();
        uint256 actual = math.inverse(target, c);
        uint256 quadraticGas = before - gasleft();
        before = gasleft();
        uint256 expected = math.binaryReference(target, c);
        uint256 binaryGas = before - gasleft();
        assertEq(actual, expected);
        emit log_named_uint("quadratic inverse gas", quadraticGas);
        emit log_named_uint("binary reference gas", binaryGas);
        assertLt(quadraticGas, binaryGas);
    }
}
