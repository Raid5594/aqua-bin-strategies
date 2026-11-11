import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { BySigTraits, BySigTraitsInterface } from "../../../contracts/libraries/BySigTraits";
type BySigTraitsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BySigTraits__factory extends ContractFactory {
    constructor(...args: BySigTraitsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BySigTraits & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BySigTraits__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212204c73bb1d440cdbc2a195aed0570b43419ad8c149d5c1848689ff8c819fe5e4bc64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "WrongNonceType";
        readonly type: "error";
    }];
    static createInterface(): BySigTraitsInterface;
    static connect(address: string, runner?: ContractRunner | null): BySigTraits;
}
export {};
