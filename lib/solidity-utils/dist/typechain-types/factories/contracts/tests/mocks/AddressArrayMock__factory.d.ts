import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { AddressArrayMock, AddressArrayMockInterface } from "../../../../contracts/tests/mocks/AddressArrayMock";
type AddressArrayMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressArrayMock__factory extends ContractFactory {
    constructor(...args: AddressArrayMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AddressArrayMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AddressArrayMock__factory;
    static readonly bytecode = "0x608080604052346015576107a1908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8062f6b2b21461069c5780631f7b6d32146106595780632f30c6f6146105aa5780636d4ce63c146104f057806389b09de714610421578063a4ece52c14610365578063ae35ad731461017a578063e0886f90146101165763ec2fd5a11461007b575f80fd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112576004356401000000008110156100ea5773ffffffffffffffffffffffffffffffffffffffff6100da60209261072c565b90549060031b1c16604051908152f35b7f4e23d035000000000000000000000000000000000000000000000000000000005f5260045ffd5b5f80fd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112576004358063ffffffff5f5460a01c1611156100ea5773ffffffffffffffffffffffffffffffffffffffff6100da60209261072c565b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760043567ffffffffffffffff811161011257366023820112156101125780600401359067ffffffffffffffff8211610338578160051b90604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f840116840184811067ffffffffffffffff8211176103385760405283526020830190602482938201019036821161011257602401915b81831061030b575050505f549063ffffffff8260a01c1691835183116102e35782610290575b61028c846040519182916040835261027e60408401826106e3565b9083820360208501526106e3565b0390f35b73ffffffffffffffffffffffffffffffffffffffff16905260015b8181106102b85780610263565b8073ffffffffffffffffffffffffffffffffffffffff600192541660208260051b86010152016102ab565b7ff9a99b25000000000000000000000000000000000000000000000000000000005f5260045ffd5b823573ffffffffffffffffffffffffffffffffffffffff811681036101125781526020928301920161023d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112575f5463ffffffff8160a01c16805f146103f9576001146103d3577fffffffffffffffffffffffff0000000000000000000000000000000000000000015f55005b507f80000000000000000000000000000000000000000000000000000000000000005f55005b7f06a2af9e000000000000000000000000000000000000000000000000000000005f5260045ffd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760043573ffffffffffffffffffffffffffffffffffffffff81168103610112576020905f5463ffffffff8160a01c1691825f146104d157740100000000000000000000000000000000000000007f800000000000000000000000000000000000000000000000000000000000000092015f551781555b600160405191018152f35b74010000000000000000000000000000000000000000175f55506104c6565b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112575f5463ffffffff8160a01c16604051918160010160051b830160405281808452610559575b6040516020808252819061028c908201866106e3565b73ffffffffffffffffffffffffffffffffffffffff16602083015260015b81811015610543578073ffffffffffffffffffffffffffffffffffffffff600192541660208260051b8601015201610577565b346101125760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760043560243573ffffffffffffffffffffffffffffffffffffffff81168103610112575f5463ffffffff8160a01c168310156100ea57821561063c57507f8000000000000000000000000000000000000000000000000000000000000000179055005b73ffffffffffffffffffffffffffffffffffffffff811618175f55005b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011257602063ffffffff5f5460a01c16604051908152f35b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125773ffffffffffffffffffffffffffffffffffffffff5f55005b90602080835192838152019201905f5b8181106107005750505090565b825173ffffffffffffffffffffffffffffffffffffffff168452602093840193909201916001016106f3565b64010000000081101561073e57905f90565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea2646970667358221220e893e06bec76bf52cf93ca5a3f3055c2d19ff43b02f13a1fd0cf5af13bda3df864736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IndexOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PopFromEmptyArray";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "i";
            readonly type: "uint256";
        }];
        readonly name: "at";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "erase";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "arr";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "providedArr";
            readonly type: "address[]";
        }];
        readonly name: "getAndProvideArr";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "length";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pop";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "push";
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
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "set";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "i";
            readonly type: "uint256";
        }];
        readonly name: "unsafeAt";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AddressArrayMockInterface;
    static connect(address: string, runner?: ContractRunner | null): AddressArrayMock;
}
export {};
