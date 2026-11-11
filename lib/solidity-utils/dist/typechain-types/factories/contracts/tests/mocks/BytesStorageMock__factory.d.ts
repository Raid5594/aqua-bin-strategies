import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BytesStorageMock, BytesStorageMockInterface } from "../../../../contracts/tests/mocks/BytesStorageMock";
type BytesStorageMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesStorageMock__factory extends ContractFactory {
    constructor(...args: BytesStorageMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BytesStorageMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BytesStorageMock__factory;
    static readonly bytecode = "0x608080604052346015576106cc908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063538127cf146104435780637c46d72d1461041857806399ebabc1146103cb578063ab62f0e1146100be5763d46eb11914610050575f80fd5b346100ba575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ba576100866104ff565b506100b6610092610519565b60408051825181526020808401519082015291810151908201529081906060820190565b0390f35b5f80fd5b346100ba5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ba5760043567ffffffffffffffff81116100ba57366023820112156100ba57806004013567ffffffffffffffff811161039e57604051917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8501160116830183811067ffffffffffffffff82111761039e5760405281835236602483830101116100ba57815f926024602093018386013783010152805167ffffffffffffffff811161039e575f54600181811c91168015610394575b602082101461036757601f81116102c7575b50602091601f8211600114610211579181925f92610206575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8260011b9260031b1c1916175f555f80f35b0151905082806101d1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08216925f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563915f5b8581106102af57508360019510610278575b505050811b015f55005b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c1916905582808061026e565b9192602060018192868501518155019401920161025c565b5f8052601f820160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301906020831061033f575b601f0160051c7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301905b81811061033457506101b8565b5f8155600101610327565b7f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56391506102fd565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b90607f16906101a6565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b346100ba575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ba576100b661040c610407610519565b610636565b60405191829182610497565b346100ba576100b661009261042c36610463565b906104356104ff565b5061043e610519565b6105b6565b346100ba576100b661040c61040761045a36610463565b9061043e610519565b7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc60409101126100ba576004359060243590565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602060409481855280519182918282880152018686015e5f8582860101520116010190565b604051906060820182811067ffffffffffffffff82111761039e57604052565b6105076104df565b905f82525f60208301525f6040830152565b6105216104ff565b505f54600181161561056f575f80527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639060011c5b61055e6104df565b9182525f6020830152604082015290565b607f5f9160011c16610556565b9190820180921161058957565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b91906105c06104ff565b506105cb828261057c565b60408401511061060e576105f46105e8601f92602086015161057c565b93518460051c9061057c565b926105fd6104df565b938452166020830152604082015290565b7fb4120f14000000000000000000000000000000000000000000000000000000005f5260045ffd5b908151604060208401519301519060016020604051958185880101604052848752601f8183890196010160051c84019484548260031b1b905281038601019101905b82821061068457505050565b6020600191835481520191019061067856fea2646970667358221220e13551b9fa18c3c884673beb4ba1fdd2671d9c4036d009e45d4806c7a513c1fb64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "OutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "setData";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wrap";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "slot";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "offset";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesStorage.Slice";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "wrapAndCopy";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "size";
            readonly type: "uint256";
        }];
        readonly name: "wrapAndSlice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "slot";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "offset";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesStorage.Slice";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "size";
            readonly type: "uint256";
        }];
        readonly name: "wrapWithSliceAndCopy";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BytesStorageMockInterface;
    static connect(address: string, runner?: ContractRunner | null): BytesStorageMock;
}
export {};
