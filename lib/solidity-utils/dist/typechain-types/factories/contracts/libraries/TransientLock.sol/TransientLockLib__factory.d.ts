import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TransientLockLib, TransientLockLibInterface } from "../../../../contracts/libraries/TransientLock.sol/TransientLockLib";
type TransientLockLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransientLockLib__factory extends ContractFactory {
    constructor(...args: TransientLockLibConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TransientLockLib & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TransientLockLib__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220c943d5d30d819ce6038569eb7dcbe3a2ca7b687f3c9d237be64778e417b1747f64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "UnexpectedLock";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnexpectedUnlock";
        readonly type: "error";
    }];
    static createInterface(): TransientLockLibInterface;
    static connect(address: string, runner?: ContractRunner | null): TransientLockLib;
}
export {};
