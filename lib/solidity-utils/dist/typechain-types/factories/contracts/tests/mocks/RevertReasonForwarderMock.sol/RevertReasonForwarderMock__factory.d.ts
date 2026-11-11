import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { RevertReasonForwarderMock, RevertReasonForwarderMockInterface } from "../../../../../contracts/tests/mocks/RevertReasonForwarderMock.sol/RevertReasonForwarderMock";
type RevertReasonForwarderMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RevertReasonForwarderMock__factory extends ContractFactory {
    constructor(...args: RevertReasonForwarderMockConstructorParams);
    getDeployTransaction(helper: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(helper: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RevertReasonForwarderMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RevertReasonForwarderMock__factory;
    static readonly bytecode = "0x608034606f57601f61036d38819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b0319169190911790556040516102e590816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60806040526004361015610011575f80fd5b5f3560e01c8063bcb87cf8146100d15763fd3785a51461002f575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100cd575f8073ffffffffffffffffffffffffffffffffffffffff81541660405160208101907f5b2dd100000000000000000000000000000000000000000000000000000000008252600481526100ac602482610150565b519134905af16100ba6101be565b50156100c257005b6040513d5f823e3d90fd5b5f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100cd576020604061010661021b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f835194859381855280519182918282880152018686015e5f85828601015201168101030190f35b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761019157604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b3d15610216573d9067ffffffffffffffff8211610191576040519161020b601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200184610150565b82523d5f602084013e565b606090565b5f8073ffffffffffffffffffffffffffffffffffffffff81541660405160208101907f5b2dd1000000000000000000000000000000000000000000000000000000000082526004815261026f602482610150565b519134905af161027d6101be565b501561029757604051610291602082610150565b5f815290565b60405160203d808352805f8385013e8201016040529056fea264697066735822122035983497f76d4586cd9abbde194779f6252d4cd8ca6d4320c60116ca8f4445fb64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "helper";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "reReason";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "reRevert";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): RevertReasonForwarderMockInterface;
    static connect(address: string, runner?: ContractRunner | null): RevertReasonForwarderMock;
}
export {};
