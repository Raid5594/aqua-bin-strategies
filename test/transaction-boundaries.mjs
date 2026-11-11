import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import {
  JsonRpcProvider,
  ContractFactory,
  Wallet,
  AbiCoder,
  keccak256,
  solidityPacked,
  concat,
  toBeHex,
} from 'ethers';

const port = 20000 + process.pid % 30000;
const rpcUrl = `http://127.0.0.1:${port}`;
const anvilProcess = spawn(
  'anvil',
  ['--port', String(port), '--silent', '--hardfork', 'prague'],
  { stdio: ['ignore', 'ignore', 'pipe'] },
);

let anvilDiagnostics = '';

anvilProcess.stderr.on('data', chunk => {
  anvilDiagnostics += chunk.toString();
});

const provider = new JsonRpcProvider(rpcUrl, undefined, { pollingInterval: 50 });
const abiCoder = AbiCoder.defaultAbiCoder();
const WETH_UNIT = 10n ** 18n;
const USDC_UNIT = 1_000_000n;
const MAX_ALLOWANCE = 2n ** 256n - 1n;

async function loadArtifact(fileName, contractName) {
  const artifactUrl = new URL(`../out/${fileName}/${contractName}.json`, import.meta.url);

  return JSON.parse(await readFile(artifactUrl));
}

async function deploy(fileName, contractName, signer, constructorArguments = []) {
  const artifact = await loadArtifact(fileName, contractName);
  const factory = new ContractFactory(artifact.abi, artifact.bytecode.object, signer);
  const contract = await factory.deploy(...constructorArguments);

  await contract.waitForDeployment();

  return contract;
}

async function contractAddress(contract) {
  return contract.getAddress();
}

async function latestBlockTimestamp() {
  const block = await provider.send('eth_getBlockByNumber', ['latest', false]);

  return Number(block.timestamp);
}

function buildSignedReport(signer, timestampSeconds) {
  const observedAtUs = BigInt(timestampSeconds) * 1_000_000n;

  const encodeFeed = (feedId, price) => solidityPacked(
    ['uint32', 'uint8', 'uint8', 'int64', 'uint8', 'int16', 'uint8', 'uint64', 'uint8', 'uint8', 'uint64'],
    [feedId, 4, 0, price, 4, -8, 5, 0, 12, 1, observedAtUs],
  );

  const payload = concat([
    solidityPacked(['uint32', 'uint64', 'uint8', 'uint8'], [0x93c7d375, observedAtUs, 0, 2]),
    encodeFeed(1001, 2000n * 100_000_000n),
    encodeFeed(1003, 100_000_000n),
  ]);
  const signature = signer.signingKey.sign(keccak256(payload));

  return concat([
    toBeHex(0x2a22999a, 4),
    signature.r,
    signature.s,
    toBeHex(signature.yParity, 1),
    toBeHex((payload.length - 2) / 2, 2),
    payload,
  ]);
}

try {
  let isAnvilReady = false;

  for (let attempt = 0; attempt < 100; ++attempt) {
    if (anvilProcess.exitCode !== null) {
      throw new Error(`anvil exited: ${anvilDiagnostics}`);
    }

    try {
      const response = await fetch(rpcUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_chainId', params: [] }),
      });

      if (response.ok) {
        isAnvilReady = true;
        break;
      }
    } catch {
      // The node may not be listening yet.
    }

    await delay(50);
  }

  assert(isAnvilReady, anvilDiagnostics || 'Anvil did not start');

  const user = await provider.getSigner(0);
  const maker = await provider.getSigner(1);
  const userAddress = await user.getAddress();
  const makerAddress = await maker.getAddress();
  const oracleSigner = Wallet.createRandom(); // Ephemeral local test key, never serialized.

  const aqua = await deploy('Aqua.sol', 'Aqua', user);
  const weth = await deploy('Tokens.sol', 'WrappedEther', user);
  const usdc = await deploy('Tokens.sol', 'Token', user, ['USD Coin', 'USDC', 6]);
  const router = await deploy('AquaSwapVMRouter.sol', 'AquaSwapVMRouter', user, [
    await contractAddress(aqua),
    await contractAddress(weth),
    userAddress,
    'SwapVM',
    '1.0.2',
  ]);

  const verifier = await deploy('MockPythLazer.sol', 'MockPythLazer', user, [oracleSigner.address]);
  const oracle = await deploy('PythPriceAdapter.sol', 'PythPriceAdapter', user, [
    await contractAddress(verifier),
    1_000_000,
  ]);
  const pricing = await deploy('SpreadPricing.sol', 'SpreadPricing', user, [
    await contractAddress(router),
    await contractAddress(oracle),
  ]);
  const builder = await deploy('BinStrategyBuilder.sol', 'BinStrategyBuilder', user);
  const permit2 = await deploy('MockPermit2.sol', 'MockPermit2', user);
  const executor = await deploy('Executor.sol', 'Executor', user, [
    await contractAddress(router),
    await contractAddress(oracle),
    await contractAddress(permit2),
    await contractAddress(weth),
  ]);

  await (await weth.connect(maker).deposit({ value: 100n * WETH_UNIT })).wait();
  await (await usdc.mint(makerAddress, 1_000_000n * USDC_UNIT)).wait();
  await (await usdc.mint(userAddress, 1_000_000n * USDC_UNIT)).wait();

  await (await weth.connect(maker).approve(await contractAddress(aqua), MAX_ALLOWANCE)).wait();
  await (await usdc.connect(maker).approve(await contractAddress(aqua), MAX_ALLOWANCE)).wait();
  await (await usdc.approve(await contractAddress(executor), MAX_ALLOWANCE)).wait();

  const config = {
    baseToken: await contractAddress(weth),
    quoteToken: await contractAddress(usdc),
    baseRate: 1n,
    quoteRate: 10n ** 12n,
    baseFeedId: 1001,
    quoteFeedId: 1003,
    maxAgeSeconds: 10,
    maxSkewSeconds: 2,
    maxConfidenceBps: 100,
    sellStartBps: 10,
    sellEndBps: 30,
    buyStartBps: 30,
    buyEndBps: 10,
    requireCurrentBlock: true,
  };
  const configType = 'tuple(address baseToken,address quoteToken,uint256 baseRate,uint256 quoteRate,uint32 baseFeedId,uint32 quoteFeedId,uint32 maxAgeSeconds,uint32 maxSkewSeconds,uint16 maxConfidenceBps,uint16 sellStartBps,uint16 sellEndBps,uint16 buyStartBps,uint16 buyEndBps,bool requireCurrentBlock)';
  const configHash = keccak256(abiCoder.encode([configType], [config]));

  await (await pricing.register(config)).wait();

  async function ship(salt) {
    const builtOrder = await builder.BuildAquaStrategy(
      makerAddress, await contractAddress(pricing), configHash, salt,
    );
    const order = [builtOrder.maker, builtOrder.traits, builtOrder.data];
    const encodedOrder = abiCoder.encode(['tuple(address maker,uint256 traits,bytes data)'], [order]);

    assert.equal(await router.hash(order), keccak256(encodedOrder));

    await (await aqua.connect(maker).ship(
      await contractAddress(router),
      encodedOrder,
      [await contractAddress(weth), await contractAddress(usdc)],
      [10n * WETH_UNIT, 20_000n * USDC_UNIT],
    )).wait();

    return order;
  }

  const batchOrder = await ship(101);
  const separateTransactionsOrder = await ship(102);
  let intentNonce = 0n;

  const buildTrade = deadline => ({
    owner: userAddress,
    recipient: userAddress,
    tokenIn: config.quoteToken,
    tokenOut: config.baseToken,
    amount: WETH_UNIT / 2n,
    maxInput: 1100n * USDC_UNIT,
    minOutput: WETH_UNIT / 2n,
    exactIn: false,
    nativeOutput: false,
    funding: 0,
    nonce: intentNonce++,
    deadline,
    solver: '0x0000000000000000000000000000000000000000',
  });

  // Two fills inside a single EVM transaction must continue the same curve.
  let blockTimestamp = await latestBlockTimestamp() + 1;
  await provider.send('evm_setNextBlockTimestamp', [blockTimestamp]);

  let userBalanceBeforeSwap = await usdc.balanceOf(userAddress);

  await (await executor.executeBatch(
    [batchOrder, batchOrder],
    [buildTrade(blockTimestamp + 60), buildTrade(blockTimestamp + 60)],
    buildSignedReport(oracleSigner, blockTimestamp),
    ['0x', '0x'],
    { value: 1n, gasLimit: 8_000_000 },
  )).wait();

  const batchPaid = userBalanceBeforeSwap - await usdc.balanceOf(userAddress);
  assert.equal(batchPaid, 2_002_200_000n);

  // Two separate transactions mined in the same block reset the curve between them.
  blockTimestamp = await latestBlockTimestamp() + 1;
  await provider.send('evm_setAutomine', [false]);
  await provider.send('evm_setNextBlockTimestamp', [blockTimestamp]);

  userBalanceBeforeSwap = await usdc.balanceOf(userAddress);
  const transactionNonce = await provider.getTransactionCount(userAddress, 'pending');

  const firstTransaction = await executor.execute(
    separateTransactionsOrder,
    buildTrade(blockTimestamp + 60),
    buildSignedReport(oracleSigner, blockTimestamp),
    '0x',
    { value: 1n, gasLimit: 4_000_000, nonce: transactionNonce },
  );
  const secondTransaction = await executor.execute(
    separateTransactionsOrder,
    buildTrade(blockTimestamp + 60),
    '0x',
    '0x',
    { gasLimit: 4_000_000, nonce: transactionNonce + 1 },
  );

  await provider.send('evm_mine', []);
  await provider.send('evm_setAutomine', [true]);

  const firstReceipt = await firstTransaction.wait();
  const secondReceipt = await secondTransaction.wait();
  assert.equal(firstReceipt.blockNumber, secondReceipt.blockNumber);

  const separatePaid = userBalanceBeforeSwap - await usdc.balanceOf(userAddress);

  // The second transaction snapshots the remaining 9.5 ETH, rather than the original 10 ETH.
  assert.equal(separatePaid, 2_002_102_632n);
  assert.equal(batchPaid - separatePaid, 97_368n);

  console.log('PASS: within-transaction fills share their curve; separate transactions reset it even in the same block.');
  console.log(`Batch: ${batchPaid} USDC units; separate same-block transactions: ${separatePaid} USDC units.`);
} finally {
  provider.destroy();
  anvilProcess.kill('SIGTERM');
}
