import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { BytesStorage, BytesStorageInterface } from "../../../contracts/libraries/BytesStorage";
type BytesStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesStorage__factory extends ContractFactory {
    constructor(...args: BytesStorageConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BytesStorage & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BytesStorage__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220f9bbc7d8b1db30a38892d80e16f35de91c56329beab573f681482510544d50c564736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "OutOfBounds";
        readonly type: "error";
    }];
    static createInterface(): BytesStorageInterface;
    static connect(address: string, runner?: ContractRunner | null): BytesStorage;
}
export {};
