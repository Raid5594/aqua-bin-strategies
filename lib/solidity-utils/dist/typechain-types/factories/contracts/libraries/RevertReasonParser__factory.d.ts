import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { RevertReasonParser, RevertReasonParserInterface } from "../../../contracts/libraries/RevertReasonParser";
type RevertReasonParserConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RevertReasonParser__factory extends ContractFactory {
    constructor(...args: RevertReasonParserConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RevertReasonParser & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RevertReasonParser__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220a66a0b0b321b329741aed7310a08bc2471c810368509a48141419828b0214c7b64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidRevertReason";
        readonly type: "error";
    }];
    static createInterface(): RevertReasonParserInterface;
    static connect(address: string, runner?: ContractRunner | null): RevertReasonParser;
}
export {};
