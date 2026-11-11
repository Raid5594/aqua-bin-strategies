import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TransientLib, TransientLibInterface } from "../../../../contracts/libraries/Transient.sol/TransientLib";
type TransientLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransientLib__factory extends ContractFactory {
    constructor(...args: TransientLibConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TransientLib & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TransientLib__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212207d91e9b4d72b3a443290cf00bfc9d19029b5ac6502990b7d431dae174790d35964736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MathOverflow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MathUnderflow";
        readonly type: "error";
    }];
    static createInterface(): TransientLibInterface;
    static connect(address: string, runner?: ContractRunner | null): TransientLib;
}
export {};
