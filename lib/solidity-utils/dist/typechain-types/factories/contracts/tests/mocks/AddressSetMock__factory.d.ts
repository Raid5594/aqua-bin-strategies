import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { AddressSetMock, AddressSetMockInterface } from "../../../../contracts/tests/mocks/AddressSetMock";
type AddressSetMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressSetMock__factory extends ContractFactory {
    constructor(...args: AddressSetMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AddressSetMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AddressSetMock__factory;
    static readonly bytecode = "0x60808060405234601557610a81908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8062f6b2b2146105265780630a3b0a4f146104e55780630a7231ba146102fe5780631f7b6d32146102bb57806329092d0e146102705780635dbe47e8146101cb5780636d4ce63c1461017a578063e0886f90146101165763ec2fd5a11461007b575f80fd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112576004356401000000008110156100ea5773ffffffffffffffffffffffffffffffffffffffff6100da602092610a39565b90549060031b1c16604051908152f35b7f4e23d035000000000000000000000000000000000000000000000000000000005f5260045ffd5b5f80fd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112576004358063ffffffff5f5460a01c1611156100ea5773ffffffffffffffffffffffffffffffffffffffff6100da602092610a39565b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610112576101c76101b36109bc565b604051918291602083526020830190610656565b0390f35b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011257602061022f610207610633565b73ffffffffffffffffffffffffffffffffffffffff165f5264010000000060205260405f2090565b548015159081610245575b506040519015158152f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915014158261023a565b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760206102b16102ac610633565b610793565b6040519015158152f35b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261011257602063ffffffff5f5460a01c16604051908152f35b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760043567ffffffffffffffff811161011257366023820112156101125780600401359067ffffffffffffffff82116104b8578160051b90604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f840116840184811067ffffffffffffffff8211176104b85760405283526020830190602482938201019036821161011257602401915b81831061048b575050505f549063ffffffff8260a01c1691835183116104635782610410575b6101c784604051918291604083526104026040840182610656565b908382036020850152610656565b73ffffffffffffffffffffffffffffffffffffffff16905260015b81811061043857806103e7565b8073ffffffffffffffffffffffffffffffffffffffff600192541660208260051b860101520161042b565b7ff9a99b25000000000000000000000000000000000000000000000000000000005f5260045ffd5b823573ffffffffffffffffffffffffffffffffffffffff81168103610112578152602092830192016103c1565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b346101125760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125760206102b1610521610633565b61069f565b34610112575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101125761055c6109bc565b80518061056557005b73ffffffffffffffffffffffffffffffffffffffff5f555f5b81811061058757005b825181101561060657807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6105ff73ffffffffffffffffffffffffffffffffffffffff602060019560051b880101511673ffffffffffffffffffffffffffffffffffffffff165f5264010000000060205260405f2090565b550161057e565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361011257565b90602080835192838152019201905f5b8181106106735750505090565b825173ffffffffffffffffffffffffffffffffffffffff16845260209384019390920191600101610666565b73ffffffffffffffffffffffffffffffffffffffff8116805f5264010000000060205260405f20548015159081610768575b50610762575f5463ffffffff8160a01c1692835f1461074357740100000000000000000000000000000000000000007f800000000000000000000000000000000000000000000000000000000000000092015f551782555b5f52640100000000602052600160405f2091019055600190565b74010000000000000000000000000000000000000000175f5550610729565b50505f90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff915014155f6106d1565b73ffffffffffffffffffffffffffffffffffffffff165f8181526401000000006020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091559081158015610993575b610762575f5463ffffffff8160a01c1680805f1461096b5760011461092c5773ffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffff00000000000000000000000000000000000000009201541691015f555b73ffffffffffffffffffffffffffffffffffffffff8116918203610890575b505050600190565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301905f5463ffffffff8160a01c168310156100ea57821561090b57507f80000000000000000000000000000000000000000000000000000000000000001790555b5f5264010000000060205260405f20555f8080610888565b73ffffffffffffffffffffffffffffffffffffffff811618175f55506108f3565b5073ffffffffffffffffffffffffffffffffffffffff167f80000000000000000000000000000000000000000000000000000000000000005f55610869565b7f06a2af9e000000000000000000000000000000000000000000000000000000005f5260045ffd5b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82146107ea565b5f549063ffffffff8260a01c16604051928160010160051b8401604052818085526109e5575050565b73ffffffffffffffffffffffffffffffffffffffff16602084015260015b818110610a0e575050565b8073ffffffffffffffffffffffffffffffffffffffff600192541660208260051b8701015201610a03565b64010000000081101561060657905f9056fea26469706673582212207adaef6d6471df2a64549f3ba617a01851bc82fdfe10dd6583b609703433f02a64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IndexOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "item";
            readonly type: "address";
        }];
        readonly name: "add";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "item";
            readonly type: "address";
        }];
        readonly name: "contains";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
            readonly name: "";
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
        readonly name: "getAndProvideSet";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "item";
            readonly type: "address";
        }];
        readonly name: "remove";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
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
    static createInterface(): AddressSetMockInterface;
    static connect(address: string, runner?: ContractRunner | null): AddressSetMock;
}
export {};
