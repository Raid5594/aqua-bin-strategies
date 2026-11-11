import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Multicall, MulticallInterface } from "../../../contracts/mixins/Multicall";
type MulticallConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Multicall__factory extends ContractFactory {
    constructor(...args: MulticallConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Multicall & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Multicall__factory;
    static readonly bytecode = "0x608080604052346015576101ff908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c63ac9650d814610024575f80fd5b346101c35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c35760043567ffffffffffffffff81116101c357366023820112156101c357806004013567ffffffffffffffff81116101c3573660248260051b840101116101c357905f907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd81360301915b838110156101c75760248160051b83010135838112156101c357820160248101359067ffffffffffffffff82116101c35760440181360381136101c357815f92918392604051928392833781018381520390305af43d156101be573d67ffffffffffffffff811161019157604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116820182811067ffffffffffffffff8211176101915760405281525f60203d92013e5b15610186576001016100bd565b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610179565b5f80fd5b00fea264697066735822122019ccbc200f76b1b8ab272785ffd4f20f5bfd3d125cdeea6d80f5efcc377362b364736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MulticallInterface;
    static connect(address: string, runner?: ContractRunner | null): Multicall;
}
export {};
