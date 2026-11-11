import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TransientMock, TransientMockInterface } from "../../../../contracts/tests/mocks/TransientMock";
type TransientMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TransientMock__factory extends ContractFactory {
    constructor(...args: TransientMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TransientMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TransientMock__factory;
    static readonly bytecode = "0x608080604052346015576106f5908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c806327ac24581461064b578063371303c01461060457806341790895146105b0578063466a737f1461057a5780634a93b3431461053a57806359739e84146104a857806365a624f5146104575780638d30948a146103cf57806391029ff1146103385780639890fd13146102fd578063b3bcfa821461024e578063bff66c3f14610192578063cbed25bc14610133578063e4c879d0146100fc5763eddc1b02146100be575f80fd5b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f85760205f5c604051908152f35b5f80fd5b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f85760043560025d005b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f85760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5c01805f5d604051908152f35b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8576004357fffffffff00000000000000000000000000000000000000000000000000000000811681036100f8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5c01805f5d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461024657602090604051908152f35b505f5260045ffd5b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5c01805f5d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146102d557602090604051908152f35b7ff93ad2c0000000000000000000000000000000000000000000000000000000005f5260045ffd5b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f857602060025c604051908152f35b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8576004357fffffffff00000000000000000000000000000000000000000000000000000000811681036100f8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5d60015f5c01805f5d801561024657602090604051908152f35b346100f85760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8575f5c801561044e575b602435810180911161042157806020915f5d604051908152f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b50600435610407565b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f857602060015c73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5f5d60015f5c01805f5d801561051257602090604051908152f35b7f9d565d4e000000000000000000000000000000000000000000000000000000005f5260045ffd5b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f857602060015f5c01805f5d604051908152f35b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8576004355f5d005b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f85760043573ffffffffffffffffffffffffffffffffffffffff811681036100f85760015d005b346100f8575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f85760015f5c01805f5d801561051257602090604051908152f35b346100f85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f8576004357fffffffff00000000000000000000000000000000000000000000000000000000811681036100f85760015f5c01805f5d801561024657602090604051908152f3fea264697066735822122015b4849d7cbf0999e50d1cd329c5bc244daf36b6bbcc53cd128a0b05f6468e1e64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "dec";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "exception";
            readonly type: "bytes4";
        }];
        readonly name: "decWithException";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "inc";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "incFromMaxValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "exception";
            readonly type: "bytes4";
        }];
        readonly name: "incFromMaxValueWithException";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "exception";
            readonly type: "bytes4";
        }];
        readonly name: "incWithException";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "initialValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "toAdd";
            readonly type: "uint256";
        }];
        readonly name: "initAndAdd";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tloadAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tloadBytes32";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tloadUint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "value";
            readonly type: "address";
        }];
        readonly name: "tstoreAddress";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "value";
            readonly type: "bytes32";
        }];
        readonly name: "tstoreBytes32";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "tstoreUint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unsafeDec";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unsafeInc";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TransientMockInterface;
    static connect(address: string, runner?: ContractRunner | null): TransientMock;
}
export {};
