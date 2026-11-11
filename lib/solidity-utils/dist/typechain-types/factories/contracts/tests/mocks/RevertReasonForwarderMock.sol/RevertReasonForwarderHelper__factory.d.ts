import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { RevertReasonForwarderHelper, RevertReasonForwarderHelperInterface } from "../../../../../contracts/tests/mocks/RevertReasonForwarderMock.sol/RevertReasonForwarderHelper";
type RevertReasonForwarderHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RevertReasonForwarderHelper__factory extends ContractFactory {
    constructor(...args: RevertReasonForwarderHelperConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RevertReasonForwarderHelper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RevertReasonForwarderHelper__factory;
    static readonly bytecode = "0x6080806040523460135760ab908160188239f35b5f80fdfe6004361015600b575f80fd5b5f3560e01c635b2dd10014601d575f80fd5b346071575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126071577fd87229d9000000000000000000000000000000000000000000000000000000005f5260045ffd5b5f80fdfea2646970667358221220b489733d51a6db25554fdeb864203324e708acb896879d91d8008261b8f68ce864736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "RevertReason";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertWithReason";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): RevertReasonForwarderHelperInterface;
    static connect(address: string, runner?: ContractRunner | null): RevertReasonForwarderHelper;
}
export {};
