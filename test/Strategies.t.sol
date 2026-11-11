// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {Test} from "forge-std/Test.sol";
import {Aqua} from "@1inch/aqua/src/Aqua.sol";
import {AquaSwapVMRouter} from "swap-vm/routers/AquaSwapVMRouter.sol";
import {ISwapVM} from "swap-vm/interfaces/ISwapVM.sol";
import {MakerTraitsLib} from "swap-vm/libs/MakerTraits.sol";
import {TakerTraitsLib} from "swap-vm/libs/TakerTraits.sol";
import {SwapQuery, SwapRegisters} from "swap-vm/libs/VM.sol";
import {PythPriceAdapter} from "../contracts/PythPriceAdapter.sol";
import {SpreadPricing} from "../contracts/SpreadPricing.sol";
import {Executor, IWETH} from "../contracts/Executor.sol";
import {IPermit2} from "../contracts/interfaces/IPermit2.sol";
import {BinStrategyBuilder} from "../contracts/libraries/BinStrategyBuilder.sol";
import {MockPythLazer} from "./mocks/MockPythLazer.sol";
import {MockPermit2} from "./mocks/MockPermit2.sol";
import {Token, WrappedEther} from "./mocks/Tokens.sol";

contract StrategiesTest is Test {
    uint256 constant ORACLE_KEY = 0x123456;
    uint256 constant USER_KEY = 0x987654;
    uint32 constant ETH_FEED = 1001;
    uint32 constant USDC_FEED = 1003;
    BinStrategyBuilder builder;
    Aqua aqua;
    AquaSwapVMRouter router;
    PythPriceAdapter oracle;
    SpreadPricing pricing;
    Executor executor;
    MockPermit2 permit2;
    WrappedEther weth;
    Token usdc;
    Token wbtc;
    address maker;
    address user;
    ISwapVM.Order order;
    uint256 nonce;

    function setUp() public {
        vm.warp(1_800_000_000); vm.roll(100);
        maker = makeAddr("maker"); user = vm.addr(USER_KEY);
        builder = new BinStrategyBuilder();
        aqua = new Aqua(); weth = new WrappedEther(); usdc = new Token("USD Coin", "USDC", 6);
        wbtc = new Token("Wrapped BTC", "WBTC", 8);
        router = new AquaSwapVMRouter(address(aqua), address(weth), address(this), "SwapVM", "1.0.2");
        oracle = new PythPriceAdapter(new MockPythLazer(vm.addr(ORACLE_KEY)), 1_000_000);
        pricing = new SpreadPricing(address(router), oracle);
        permit2 = new MockPermit2();
        executor = new Executor(ISwapVM(address(router)), oracle, IPermit2(address(permit2)), IWETH(address(weth)));
        vm.deal(address(this), 1000 ether);
        // Back minted WETH with native currency for unwrap tests.
        vm.deal(address(weth), 1000 ether);
        weth.mint(maker, 100 ether); usdc.mint(maker, 300_000e6);
        weth.mint(user, 100 ether); usdc.mint(user, 1_000_000e6);
        vm.startPrank(user);
        weth.approve(address(executor), type(uint256).max); usdc.approve(address(executor), type(uint256).max);
        weth.approve(address(permit2), type(uint256).max); usdc.approve(address(permit2), type(uint256).max);
        vm.stopPrank();
        order = _ship(address(weth), 10 ether, 20_000e6, 20, 20, 20, 20, 1);
        _update(2000e8, 1e8, uint64(block.timestamp * 1e6));
    }

    function test_ConfigRatesMatchTokenDecimalsAndCannotBeOverwritten() public {
        SpreadPricing.Config memory c = _config(address(weth), 20, 20, 20, 20);
        c.quoteToken = address(usdc);
        bytes32 id = pricing.register(c);
        assertEq(id, keccak256(abi.encode(c)));
        SpreadPricing.Config memory stored = pricing.config(id);
        assertEq(stored.baseRate, 1);
        assertEq(stored.quoteRate, 1e12);
        assertEq(pricing.register(c), id);
        c.baseRate = 1e18; // Unit size is not a normalization multiplier.
        vm.expectRevert(SpreadPricing.InvalidConfig.selector); pricing.register(c);
        c.baseRate = 1; c.quoteRate = 1;
        vm.expectRevert(SpreadPricing.InvalidConfig.selector); pricing.register(c);
        c.quoteRate = 0;
        vm.expectRevert(SpreadPricing.InvalidConfig.selector); pricing.register(c);
        stored = pricing.config(id);
        assertEq(stored.baseRate, 1);
        assertEq(stored.quoteRate, 1e12);
    }

    function test_UnknownConfigIsRejected() public {
        bytes32 missing = keccak256("unregistered config");
        ISwapVM.Order memory o = builder.BuildAquaStrategy(maker, address(pricing), missing, 99);
        address[] memory tokens = new address[](2); tokens[0] = address(weth); tokens[1] = address(usdc);
        uint256[] memory balances = new uint256[](2); balances[0] = 10 ether;
        vm.prank(maker); aqua.ship(address(router), abi.encode(o), tokens, balances);
        vm.expectRevert(SpreadPricing.InvalidConfig.selector);
        _run(o, _trade(true, false, 1e6, 1e6));
    }

    function test_BuilderPreservesProductionEncodingAndHash() public view {
        bytes32 id = keccak256("config");
        ISwapVM.Order memory built = builder.BuildAquaStrategy(maker, address(pricing), id, 42);
        // Golden production-v1.0.2 instruction headers, independent of the builder.
        bytes memory expected = abi.encodePacked(hex"1408", uint64(42), hex"2034", address(pricing), id);
        assertEq(built.data, expected);
        assertEq(built.maker, maker);
        assertTrue(MakerTraitsLib.useAquaInsteadOfSignature(built.traits));
        assertEq(router.hash(built), keccak256(abi.encode(built)));
        ISwapVM.Order memory changed = builder.BuildAquaStrategy(maker, address(pricing), keccak256("other config"), 42);
        assertNotEq(router.hash(built), router.hash(changed));
    }

    function _config(address base, uint16 s0, uint16 s1, uint16 b0, uint16 b1)
        internal view returns (SpreadPricing.Config memory) {
        return SpreadPricing.Config(base, address(0), 10 ** (18 - Token(base).decimals()), 1e12, ETH_FEED, USDC_FEED, 10, 2, 100, s0, s1, b0, b1, true);
    }

    function _ship(address base, uint256 baseBalance, uint256 quoteBalance, uint16 s0, uint16 s1, uint16 b0, uint16 b1, uint64 salt)
        internal returns (ISwapVM.Order memory o) {
        SpreadPricing.Config memory c = _config(base, s0, s1, b0, b1); c.quoteToken = address(usdc);
        bytes32 configId = pricing.register(c);
        o = builder.BuildAquaStrategy(maker, address(pricing), configId, salt);
        address[] memory tokens = new address[](2); tokens[0] = base; tokens[1] = address(usdc);
        uint256[] memory balances = new uint256[](2); balances[0] = baseBalance; balances[1] = quoteBalance;
        vm.startPrank(maker);
        Token(base).approve(address(aqua), type(uint256).max); usdc.approve(address(aqua), type(uint256).max);
        bytes32 shipped = aqua.ship(address(router), abi.encode(o), tokens, balances);
        vm.stopPrank();
        assertEq(shipped, router.hash(o)); assertEq(shipped, keccak256(abi.encode(o)));
    }

    function _feed(uint32 id, int64 price, uint64 ts) internal pure returns (bytes memory) {
        return abi.encodePacked(id, uint8(4), uint8(0), price, uint8(4), int16(-8), uint8(5), uint64(0), uint8(12), uint8(1), ts);
    }

    function _envelope(int64 eth, int64 usd, uint64 ts) internal pure returns (bytes memory) {
        bytes memory payload = abi.encodePacked(uint32(0x93c7d375), ts, uint8(0), uint8(2),
            _feed(ETH_FEED, eth, ts), _feed(USDC_FEED, usd, ts));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ORACLE_KEY, keccak256(payload));
        return abi.encodePacked(uint32(0x2a22999a), r, s, uint8(v - 27), uint16(payload.length), payload);
    }

    function _update(int64 eth, int64 usd, uint64 ts) internal { oracle.update{value: 1}(_envelope(eth, usd, ts)); }

    function _trade(bool sell, bool exactIn, uint256 amount, uint256 maxInput) internal returns (Executor.Trade memory t) {
        t = Executor.Trade(user, user, sell ? address(usdc) : address(weth), sell ? address(weth) : address(usdc),
            amount, maxInput, 0, exactIn, false, Executor.Funding.Allowance, nonce++, block.timestamp + 60, address(0));
    }

    function _run(ISwapVM.Order memory o, Executor.Trade memory t) internal returns (uint256 ai, uint256 ao) {
        vm.prank(user); return executor.execute(o, t, "", "");
    }

    function test_FixedSellAndBuy() public {
        (uint256 ai, uint256 ao) = _run(order, _trade(true, false, 1 ether, 2200e6));
        assertEq(ai, 2004e6); assertEq(ao, 1 ether);
        (ai, ao) = _run(order, _trade(false, true, 1 ether, 1 ether));
        assertEq(ai, 1 ether); assertEq(ao, 1996e6);
        assertEq(usdc.balanceOf(address(executor)), 0);
        assertEq(usdc.allowance(address(executor), address(router)), 0);
    }

    function test_ExactInputSellAndExactOutputBuy() public {
        (,uint256 out) = _run(order, _trade(true, true, 2004e6, 2004e6)); assertEq(out, 1 ether);
        (uint256 paid,) = _run(order, _trade(false, false, 1996e6, 2 ether)); assertLe(paid, 1 ether);
        assertApproxEqAbs(paid, 1 ether, 1);
    }

    function test_FlexibleCurveSplitsSharePosition() public {
        ISwapVM.Order memory a = _ship(address(weth), 10 ether, 0, 10, 30, 30, 10, 2);
        ISwapVM.Order memory b = _ship(address(weth), 10 ether, 0, 10, 30, 30, 10, 3);
        (uint256 one,) = _run(a, _trade(true, false, 10 ether, 21_000e6));
        (uint256 first,) = _run(b, _trade(true, false, 4 ether, 9000e6));
        (uint256 second,) = _run(b, _trade(true, false, 6 ether, 13_000e6));
        assertEq(one, first + second); assertEq(one, 20_040e6);
    }

    function test_ReplenishmentImmediatelyAvailableAndTerminalSpread() public {
        ISwapVM.Order memory o = _ship(address(weth), 1 ether, 0, 10, 30, 30, 10, 4);
        _run(o, _trade(true, false, 1 ether, 2100e6)); // All maker WETH leaves.
        _run(o, _trade(false, true, 0.5 ether, 0.5 ether)); // WETH replenishes immediately.
        (uint256 paid,) = _run(o, _trade(true, false, 0.5 ether, 1100e6));
        assertEq(paid, 1003e6); // New sell volume stays at terminal +30bps.
    }

    function test_UsdcDepegChangesActualCrossPrice() public {
        _update(2000e8, 99_000_000, uint64(block.timestamp * 1e6 + 1));
        (uint256 paid,) = _run(order, _trade(true, false, 1 ether, 2200e6));
        assertGt(paid, 2024e6); assertLt(paid, 2025e6);
    }

    function test_WbtcEightDecimals() public {
        wbtc.mint(maker, 2e8); wbtc.mint(user, 1e8);
        vm.prank(user); wbtc.approve(address(executor), type(uint256).max);
        ISwapVM.Order memory o = _ship(address(wbtc), 1e8, 100_000e6, 20, 20, 20, 20, 5);
        _update(100_000e8, 1e8, uint64(block.timestamp * 1e6 + 1));
        Executor.Trade memory t = _trade(true, false, 1e6, 1100e6); t.tokenOut = address(wbtc);
        (uint256 paid, uint256 got) = _run(o, t);
        assertEq(paid, 1002e6); assertEq(got, 1e6);
    }

    function test_RejectsPreviousBlockAndDuplicateDoesNotRefresh() public {
        bytes memory old = _envelope(2000e8, 1e8, uint64(block.timestamp * 1e6));
        vm.roll(block.number + 1); oracle.update{value: 1}(old);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.expectRevert(); _run(order, t);
    }

    function test_RejectsStaleObservation() public {
        vm.warp(block.timestamp + 11);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.expectRevert(); _run(order, t);
    }

    function test_UpdateAndSwapInOneCall() public {
        vm.roll(block.number + 1); vm.warp(block.timestamp + 12);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        bytes memory report = _envelope(2000e8, 1e8, uint64(block.timestamp * 1e6));
        vm.deal(user, 1 ether); vm.prank(user);
        (uint256 paid,) = executor.execute{value: 1}(order, t, report, ""); assertEq(paid, 2004e6);
    }

    function test_RelayedAllowanceNeedsSignedIntentAndCannotRedirect() public {
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        bytes32 digest = executor.authorizationDigest(t, router.hash(order));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(USER_KEY, digest);
        bytes memory sig = abi.encodePacked(r, s, v);
        t.recipient = makeAddr("attacker");
        vm.expectRevert(Executor.Unauthorized.selector); executor.execute(order, t, "", sig);
        t.recipient = user;
        (uint256 paid,) = executor.execute(order, t, "", sig); assertEq(paid, 2004e6);
        vm.expectRevert(Executor.Unauthorized.selector); executor.execute(order, t, "", sig);
    }

    function test_Permit2AllowanceFunding() public {
        vm.prank(user); permit2.approve(address(usdc), address(executor), type(uint160).max);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6); t.funding = Executor.Funding.Permit2Allowance;
        (uint256 paid,) = _run(order, t); assertEq(paid, 2004e6);
    }

    function test_Permit2WitnessFundsRelayedTrade() public {
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6); t.funding = Executor.Funding.Permit2Witness;
        IPermit2.PermitTransferFrom memory p = IPermit2.PermitTransferFrom(
            IPermit2.TokenPermissions(address(usdc), t.maxInput), t.nonce, t.deadline);
        bytes32 digest = permit2.digest(p, address(executor), executor.witnessHash(t, router.hash(order)), executor.WITNESS_TYPE_STRING());
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(USER_KEY, digest);
        (uint256 paid,) = executor.execute(order, t, "", abi.encodePacked(r,s,v)); assertEq(paid, 2004e6);
    }

    function test_NativeEthInputWrapsAndRefunds() public {
        vm.deal(user, 10 ether);
        Executor.Trade memory t = _trade(false, false, 1996e6, 2 ether); t.funding = Executor.Funding.Native;
        vm.prank(user); (uint256 paid,) = executor.execute{value: 2 ether}(order, t, "", "");
        assertEq(paid, 1 ether); assertEq(user.balance, 9 ether);
    }

    function test_PricingStateRollsBackWhenSettlementFails() public {
        ISwapVM.Order memory o = _ship(address(weth), 10 ether, 0, 10, 30, 30, 10, 6);
        vm.prank(maker); weth.approve(address(aqua), 0);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.expectRevert(); _run(o, t);
        vm.prank(maker); weth.approve(address(aqua), type(uint256).max);
        (uint256 paid,) = _run(o, t); assertEq(paid, 2002_200000);
    }

    function test_DockPreventsExecution() public {
        address[] memory tokens = new address[](2); tokens[0] = address(weth); tokens[1] = address(usdc);
        bytes32 orderHash = router.hash(order);
        vm.prank(maker); aqua.dock(address(router), orderHash, tokens);
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.expectRevert(); _run(order, t);
    }

    function test_QuoteIsReadOnlyAndMatchesSwap() public {
        TakerTraitsLib.Args memory a;
        a.taker = address(executor); a.isExactIn = false; a.useTransferFromAndAquaPush = true;
        vm.prank(address(executor));
        (uint256 quotedIn, uint256 quotedOut,) = ISwapVM(address(router)).quote(order, address(usdc), address(weth), 1 ether, TakerTraitsLib.build(a));
        (uint256 paid, uint256 received) = _run(order, _trade(true, false, 1 ether, 2200e6));
        assertEq(paid, quotedIn); assertEq(received, quotedOut);
    }

    function testFuzz_FlexibleSellSplit(uint64 raw) public {
        uint256 firstAmount = bound(raw, 1e12, 10 ether - 1e12);
        ISwapVM.Order memory a = _ship(address(weth), 10 ether, 0, 10, 30, 30, 10, 7);
        ISwapVM.Order memory b = _ship(address(weth), 10 ether, 0, 10, 30, 30, 10, 8);
        (uint256 one,) = _run(a, _trade(true, false, 10 ether, 21_000e6));
        (uint256 first,) = _run(b, _trade(true, false, firstAmount, 21_000e6));
        (uint256 second,) = _run(b, _trade(true, false, 10 ether-firstAmount, 21_000e6));
        assertEq(one, first + second);
    }

    function test_FlexibleBuySplitAndExactOutputInverse() public {
        ISwapVM.Order memory a = _ship(address(weth), 0, 20_000e6, 10, 30, 30, 10, 9);
        ISwapVM.Order memory b = _ship(address(weth), 0, 20_000e6, 10, 30, 30, 10, 10);
        (,uint256 one) = _run(a, _trade(false, true, 10 ether, 10 ether));
        (,uint256 first) = _run(b, _trade(false, true, 4 ether, 4 ether));
        (,uint256 second) = _run(b, _trade(false, true, 6 ether, 6 ether));
        assertEq(one, first + second); assertEq(one, 19_960e6);
        ISwapVM.Order memory d = _ship(address(weth), 0, 20_000e6, 10, 30, 30, 10, 11);
        (uint256 paid,) = _run(d, _trade(false, false, one, 11 ether));
        assertApproxEqAbs(paid, 10 ether, 1);
    }

    function test_DirectRouterCannotBypassFreshness() public {
        vm.roll(block.number + 1);
        TakerTraitsLib.Args memory a; a.taker = user; a.useTransferFromAndAquaPush = true;
        bytes memory data = TakerTraitsLib.build(a);
        vm.prank(user); vm.expectRevert();
        router.swap(order, address(usdc), address(weth), 1 ether, data);
    }

    function test_WrongPairIsRejected() public {
        SpreadPricing.Config memory c = _config(address(weth), 20, 20, 20, 20); c.quoteToken = address(usdc);
        ISwapVM.Order memory o = builder.BuildAquaStrategy(maker, address(pricing), pricing.register(c), 12);
        wbtc.mint(maker, 1e8);
        address[] memory tokens = new address[](3);
        tokens[0] = address(weth); tokens[1] = address(usdc); tokens[2] = address(wbtc);
        uint256[] memory balances = new uint256[](3);
        balances[0] = 10 ether; balances[1] = 20_000e6; balances[2] = 1e8;
        vm.startPrank(maker);
        wbtc.approve(address(aqua), type(uint256).max);
        aqua.ship(address(router), abi.encode(o), tokens, balances);
        vm.stopPrank();
        Executor.Trade memory t = _trade(true, false, 1e6, 2200e6); t.tokenOut = address(wbtc);
        vm.expectRevert(SpreadPricing.InvalidPair.selector); _run(o, t);
    }

    function test_InvalidReportSignatureCannotUpdateCache() public {
        bytes memory report = _envelope(2000e8, 1e8, uint64(block.timestamp * 1e6 + 1));
        report[20] = bytes1(uint8(report[20]) ^ 1);
        vm.expectRevert(); oracle.update{value: 1}(report);
    }

    function test_MissingUsdcUpdateRejectsSameBlockPolicy() public {
        vm.roll(block.number + 1); vm.warp(block.timestamp + 12);
        uint64 ts = uint64(block.timestamp * 1e6);
        bytes memory payload = abi.encodePacked(uint32(0x93c7d375), ts, uint8(0), uint8(1), _feed(ETH_FEED, 2000e8, ts));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(ORACLE_KEY, keccak256(payload));
        oracle.update{value: 1}(abi.encodePacked(uint32(0x2a22999a), r, s, uint8(v-27), uint16(payload.length), payload));
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.expectRevert(); _run(order, t);
    }

    function test_NativeEthOutput() public {
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6); t.nativeOutput = true;
        uint256 beforeBalance = user.balance;
        _run(order, t); assertEq(user.balance - beforeBalance, 1 ether);
    }

    function test_CancelledNonceCannotExecute() public {
        Executor.Trade memory t = _trade(true, false, 1 ether, 2200e6);
        vm.prank(user); executor.cancelNonce(t.nonce);
        vm.expectRevert(Executor.Unauthorized.selector); _run(order, t);
    }
}
