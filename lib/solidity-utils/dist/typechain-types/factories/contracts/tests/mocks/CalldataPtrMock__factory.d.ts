import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { CalldataPtrMock, CalldataPtrMockInterface } from "../../../../contracts/tests/mocks/CalldataPtrMock";
type CalldataPtrMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CalldataPtrMock__factory extends ContractFactory {
    constructor(...args: CalldataPtrMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CalldataPtrMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CalldataPtrMock__factory;
    static readonly bytecode = "0x60808060405234601557610217908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c908163067ffea6146100f95750806308cebadd146100c2578063391c87c8146100a65763775a8f5e14610048575f80fd5b346100a25760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a2576040518061009e6004356fffffffffffffffffffffffffffffffff81169060801c8361019c565b0390f35b5f80fd5b346100a25760206100b63661012d565b6040519160801b178152f35b346100a25760406100d23661012d565b9060801b176fffffffffffffffffffffffffffffffff8251918060801c8352166020820152f35b346100a2578061009e61010b3661012d565b9060801b176fffffffffffffffffffffffffffffffff81169060801c8361019c565b9060207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8301126100a25760043567ffffffffffffffff81116100a257826023820112156100a25780600401359267ffffffffffffffff84116100a257602484830101116100a2576024019190565b90601f836040947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09360208652816020870152868601375f858286010152011601019056fea2646970667358221220581597036233184e8753ee242e3745ef234a9d4b30b0ba6160de9449615a838164736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "from";
        readonly outputs: readonly [{
            readonly internalType: "CalldataPtr";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "getOffsetAndLength";
        readonly outputs: readonly [{
            readonly internalType: "uint128";
            readonly name: "offset";
            readonly type: "uint128";
        }, {
            readonly internalType: "uint128";
            readonly name: "length";
            readonly type: "uint128";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "roundTrip";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "CalldataPtr";
            readonly name: "ptr";
            readonly type: "uint256";
        }];
        readonly name: "toBytes";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CalldataPtrMockInterface;
    static connect(address: string, runner?: ContractRunner | null): CalldataPtrMock;
}
export {};
