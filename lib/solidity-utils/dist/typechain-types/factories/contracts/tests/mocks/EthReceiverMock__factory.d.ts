import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EthReceiverMock, EthReceiverMockInterface } from "../../../../contracts/tests/mocks/EthReceiverMock";
type EthReceiverMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EthReceiverMock__factory extends ContractFactory {
    constructor(...args: EthReceiverMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EthReceiverMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EthReceiverMock__factory;
    static readonly bytecode = "0x60808060405234601357606e908160188239f35b5f80fdfe36156008575f80fd5b323314601057005b7f1b10b0f9000000000000000000000000000000000000000000000000000000005f5260045ffdfea2646970667358221220c87b469fcd9768792c93e377a980fb3b3b241a6c143b1385077c3f49f97616f664736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "EthDepositRejected";
        readonly type: "error";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): EthReceiverMockInterface;
    static connect(address: string, runner?: ContractRunner | null): EthReceiverMock;
}
export {};
