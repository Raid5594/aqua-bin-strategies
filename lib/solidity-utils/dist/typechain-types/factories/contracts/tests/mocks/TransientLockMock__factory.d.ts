import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TransientLockMock, TransientLockMockInterface } from "../../../../contracts/tests/mocks/TransientLockMock";
type TransientLockMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransientLockMock__factory extends ContractFactory {
    constructor(...args: TransientLockMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TransientLockMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TransientLockMock__factory;
    static readonly bytecode = "0x608080604052346015576102fb908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063027d0909146101c35780630ea442271461017e5780638cad421e1461013c578063a4e2d63414610141578063a69df4b51461013c578063d194c3a1146100a25763f83d08ba14610066575f80fd5b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e5761009c61025e565b005b5f80fd5b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e576100d861025e565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff805f5c01805f5d1461011457602060015f5c14604051908152f35b7ffed3ca24000000000000000000000000000000000000000000000000000000005f5260045ffd5b610201565b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e57602060015f5c14604051908152f35b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e576101b461025e565b602060015f5c14604051908152f35b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e576101f961025e565b61009c61025e565b3461009e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff805f5c01805f5d1461011457005b60015f5c01805f5d801561029d5760010361027557565b7f3e26409c000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f9d565d4e000000000000000000000000000000000000000000000000000000005f5260045ffdfea2646970667358221220f89e30602fadd9b9aba0a1422abd432616cf9e2360303cde724c9688f11be5cf64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "UnexpectedLock";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "doubleLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isLocked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lockAndCheck";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lockUnlockAndCheck";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlockWithoutLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TransientLockMockInterface;
    static connect(address: string, runner?: ContractRunner | null): TransientLockMock;
}
export {};
