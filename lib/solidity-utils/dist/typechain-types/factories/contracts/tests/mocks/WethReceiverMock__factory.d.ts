import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { WethReceiverMock, WethReceiverMockInterface } from "../../../../contracts/tests/mocks/WethReceiverMock";
type WethReceiverMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WethReceiverMock__factory extends ContractFactory {
    constructor(...args: WethReceiverMockConstructorParams);
    getDeployTransaction(weth: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(weth: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<WethReceiverMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): WethReceiverMock__factory;
    static readonly bytecode = "0x60a034606457601f61012138819003918201601f19168301916001600160401b03831184841017606857808492602094604052833981010312606457516001600160a01b038116810360645760805260405160a4908161007d823960805181601f0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe36156008575f80fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303604657005b7f1b10b0f9000000000000000000000000000000000000000000000000000000005f5260045ffdfea26469706673582212203a0185ce97b71614558dbff88e6ba0b4016c38d8106fcaca245aca55574e30fa64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "weth";
            readonly type: "address";
        }];
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
    static createInterface(): WethReceiverMockInterface;
    static connect(address: string, runner?: ContractRunner | null): WethReceiverMock;
}
export {};
