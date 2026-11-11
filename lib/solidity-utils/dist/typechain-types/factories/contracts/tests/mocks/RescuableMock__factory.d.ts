import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { RescuableMock, RescuableMockInterface } from "../../../../contracts/tests/mocks/RescuableMock";
type RescuableMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RescuableMock__factory extends ContractFactory {
    constructor(...args: RescuableMockConstructorParams);
    getDeployTransaction(owner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(owner: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RescuableMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RescuableMock__factory;
    static readonly bytecode = "0x60803460b857601f61059f38819003918201601f19168301916001600160401b0383118484101760bc5780849260209460405283398101031260b857516001600160a01b0381169081900360b857801560a5575f80546001600160a01b031981168317825560405192916001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a36104ce90816100d18239f35b631e4fbdf760e01b5f525f60045260245ffd5b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c8063715018a6146103b257806378e3214f1461018d5780638da5cb5b1461013d5763f2fde38b0361000e57346101395760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101395760043573ffffffffffffffffffffffffffffffffffffffff8116809103610139576100a261044c565b801561010d5773ffffffffffffffffffffffffffffffffffffffff5f54827fffffffffffffffffffffffff00000000000000000000000000000000000000008216175f55167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05f80a3005b7f1e4fbdf7000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b5f80fd5b34610139575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013957602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b346101395760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101395760043573ffffffffffffffffffffffffffffffffffffffff81169081810361013957602435916101ea61044c565b826101f157005b8015908115610394575b501561030157508047106102d9575f80808093335af13d156102d4573d67ffffffffffffffff81116102a757604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116820182811067ffffffffffffffff8211176102a75760405281525f60203d92013e5b1561027f57005b7fb12d13eb000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610278565b7ff4d678b8000000000000000000000000000000000000000000000000000000005f5260045ffd5b905f6044602092604051907fa9059cbb000000000000000000000000000000000000000000000000000000008252336004830152602482015282855af19081610372575b50610018577ffb7f5079000000000000000000000000000000000000000000000000000000005f5260045ffd5b90503d1561038c575060015f5114601f3d11165b81610345565b3b1515610386565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee915014836101fb565b34610139575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610139576103e861044c565b5f73ffffffffffffffffffffffffffffffffffffffff81547fffffffffffffffffffffffff000000000000000000000000000000000000000081168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a3005b73ffffffffffffffffffffffffffffffffffffffff5f5416330361046c57565b7f118cdaa7000000000000000000000000000000000000000000000000000000005f523360045260245ffdfea264697066735822122047cea38316667ececcfabc75861cf879262290ec120702cea0ca8741eb98530964736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
        readonly type: "error";
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
        readonly inputs: readonly [];
        readonly name: "SafeTransferFailed";
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
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "rescueFunds";
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
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): RescuableMockInterface;
    static connect(address: string, runner?: ContractRunner | null): RescuableMock;
}
export {};
