import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ShortStrings, ShortStringsInterface } from "../../../../@openzeppelin/contracts/utils/ShortStrings";
type ShortStringsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ShortStrings__factory extends ContractFactory {
    constructor(...args: ShortStringsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ShortStrings & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ShortStrings__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea264697066735822122007d24d7d01935fe23c88e8da5db3ae4f57527835d7a5e437e935763c3e22a54964736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidShortString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "StringTooLong";
        readonly type: "error";
    }];
    static createInterface(): ShortStringsInterface;
    static connect(address: string, runner?: ContractRunner | null): ShortStrings;
}
export {};
