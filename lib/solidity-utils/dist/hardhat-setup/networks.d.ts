import dotenv from 'dotenv';
import { ChainConfig } from '@nomicfoundation/hardhat-verify/src/types';
import { HardhatNetworkAccountsUserConfig, Network, NetworksUserConfig } from 'hardhat/types';
/**
 * @category Hardhat-Setup
 * Loads environment variables into process.env using the dotenv package.
 * By default, loads variables from a `.env` file in the project root.
 * You can provide custom options (e.g. a different path or encoding) via the `options` parameter.
 * @param options Optional configuration object for dotenv (e.g. `{ path: '.env.local' }`).
 * @see https://github.com/motdotla/dotenv#config
 */
export declare function loadEnv(options?: dotenv.DotenvConfigOptions): void;
/**
 * @category Hardhat-Setup
 * Configuration type for managing Etherscan integration in Hardhat setups.
 * @param apiKey The API key for accessing the Etherscan API v2 (used for all networks).
 * @param customChains Array of custom blockchain network configurations.
 */
export type Etherscan = {
    apiKey: string | {
        [network: string]: string;
    };
    customChains: ChainConfig[];
};
/**
 * @category Hardhat-Setup
 * A helper method to get the network name from the command line arguments.
 * @returns The network name.
 */
export declare function getNetwork(): string;
/**
 * @category Hardhat-Setup
 * A helper method to parse RPC configuration strings. Checks that the string is in the expected format.
 * @param envRpc The RPC configuration string to parse.
 * @returns An object containing the RPC URL and optional auth key HTTP header.
 */
export declare function parseRpcEnv(envRpc: string): {
    url: string;
    authKeyHttpHeader?: string;
};
/**
 * @category Hardhat-Setup
 * A helper method to reset the Hardhat network to the local network or to a fork.
 * @param network The Hardhat network object.
 * @param networkName The name of the network to reset to.
 */
export declare function resetHardhatNetworkFork(network: Network, networkName: string): Promise<void>;
/**
 * @category Hardhat-Setup
 * The Network class is a helper class to register networks and Etherscan API keys.
 * See the [README](https://github.com/1inch/solidity-utils/tree/master/hardhat-setup/README.md) for usage.
 */
export declare class Networks {
    networks: NetworksUserConfig;
    etherscan: Etherscan;
    constructor(useHardhat?: boolean, forkingNetworkName?: string, saveHardhatDeployments?: boolean, forkingAccounts?: HardhatNetworkAccountsUserConfig, autoLoadEnv?: boolean);
    register(name: string, chainId: number, rpc?: string, privateKey?: string, etherscanNetworkName?: string, etherscanKey?: string, hardfork?: string, l1Network?: string): void;
    registerCustom(name: string, chainId: number, url?: string, privateKey?: string, etherscanKey?: string, apiURL?: string, browserURL?: string, hardfork?: string): void;
    registerAll(): {
        networks: NetworksUserConfig;
        etherscan: Etherscan;
    };
    getEtherscanConfig(network: string): Etherscan;
    getNetworksConfig(): NetworksUserConfig;
}
