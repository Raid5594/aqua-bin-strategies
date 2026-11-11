import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ERC1271WalletMock, ERC1271WalletMockInterface } from "../../../../contracts/tests/mocks/ERC1271WalletMock";
type ERC1271WalletMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1271WalletMock__factory extends ContractFactory {
    constructor(...args: ERC1271WalletMockConstructorParams);
    getDeployTransaction(originalOwner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(originalOwner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC1271WalletMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC1271WalletMock__factory;
    static readonly bytecode = "0x60803460b857601f61052c38819003918201601f19168301916001600160401b0383118484101760bc5780849260209460405283398101031260b857516001600160a01b0381169081900360b857801560a5575f80546001600160a01b031981168317825560405192916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a361045b90816100d18239f35b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f3560e01c9081631626ba7e1461022557508063715018a61461018b5780638da5cb5b1461013b5763f2fde38b14610048575f80fd5b346101375760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101375760043573ffffffffffffffffffffffffffffffffffffffff8116809103610137576100a06103d9565b801561010b5773ffffffffffffffffffffffffffffffffffffffff5f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b7f1e4fbdf7000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b5f80fd5b34610137575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013757602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b34610137575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610137576101c16103d9565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b346101375760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101375760243567ffffffffffffffff811161013757366023820112156101375780600401359067ffffffffffffffff82116101375760248101923660248484010111610137575f93819384816041146103c0575060401461037a57505050505f805b610331575b5073ffffffffffffffffffffffffffffffffffffffff805f54169116145f146103295760207f1626ba7e000000000000000000000000000000000000000000000000000000005b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b60205f6102ff565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a1606082015110156102b8576020915060805f91600435815282805260015afa505f51816102b8565b7f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6060916020604487960135918260ff1c601b01828701526040860137169101526102b3565b6064909401355f1a6020840152506040918201376102b3565b73ffffffffffffffffffffffffffffffffffffffff5f541633036103f957565b7f118cdaa7000000000000000000000000000000000000000000000000000000005f523360045260245ffdfea2646970667358221220bf2847be26a53a3f1cc2c713174dcdfcf31e0f63744e1e026f9015833a4b873e64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "originalOwner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "hash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "isValidSignature";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "magicValue";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC1271WalletMockInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC1271WalletMock;
}
export {};
