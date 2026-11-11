import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { CalldataMock, CalldataMockInterface } from "../../../../contracts/tests/mocks/CalldataMock";
type CalldataMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CalldataMock__factory extends ContractFactory {
    constructor(...args: CalldataMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CalldataMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CalldataMock__factory;
    static readonly bytecode = "0x60808060405234601557610264908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081634c8ded50146100ed57508063ac5b804f146100c7578063c27c4556146100745763ff2ada3214610048575f80fd5b346100705761006c610059366101dd565b9290918360405194859403910183610198565b0390f35b5f80fd5b3461007057610082366101dd565b918183101561009f5761006c908360405194859403910183610198565b7f0d5e7082000000000000000000000000000000000000000000000000000000005f5260045ffd5b346100705761006c6100d836610143565b92908094925060405194859403910183610198565b34610070576100fb36610143565b91829391931161009f5782849361006c9303910183610198565b9181601f840112156100705782359167ffffffffffffffff8311610070576020838186019501011161007057565b60607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc820112610070576004359067ffffffffffffffff82116100705761018c91600401610115565b90916024359060443590565b90601f836040947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09360208652816020870152868601375f8582860101520116010190565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc820112610070576004359067ffffffffffffffff82116100705761022691600401610115565b90916024359056fea26469706673582212203fbd0bb171ac3527121095618db908b1c86f724e2d8f06e0d58a70f92f2fcbe964736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "TestError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "begin";
            readonly type: "uint256";
        }];
        readonly name: "sliceToEnd";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "begin";
            readonly type: "uint256";
        }];
        readonly name: "sliceToEndChecked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "begin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly name: "sliceWithBounds";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "begin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "end";
            readonly type: "uint256";
        }];
        readonly name: "sliceWithBoundsChecked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CalldataMockInterface;
    static connect(address: string, runner?: ContractRunner | null): CalldataMock;
}
export {};
