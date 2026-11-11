import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { SelfdestructEthSenderMock, SelfdestructEthSenderMockInterface } from "../../../contracts/mocks/SelfdestructEthSenderMock";
type SelfdestructEthSenderMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SelfdestructEthSenderMock__factory extends ContractFactory {
    constructor(...args: SelfdestructEthSenderMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SelfdestructEthSenderMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SelfdestructEthSenderMock__factory;
    static readonly bytecode = "0x608080604052346015576101db908161001a8239f35b5f80fdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c80631066379314610154576363b6b31f0361000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101505760043573ffffffffffffffffffffffffffffffffffffffff8116809103610150575f8080809347905af13d1561014b573d67ffffffffffffffff811161011e57604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116820182811067ffffffffffffffff82111761011e5760405281525f60203d92013e5b156100f657005b7fb12d13eb000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6100ef565b5f80fd5b346101505760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101505760043573ffffffffffffffffffffffffffffffffffffffff8116810361015057fffea264697066735822122076ec23c0200a6739db3a0f3df064b0ec753821e8e8c085ec7da0b1a602e8845b64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "stopAndTransferBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "transferBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SelfdestructEthSenderMockInterface;
    static connect(address: string, runner?: ContractRunner | null): SelfdestructEthSenderMock;
}
export {};
