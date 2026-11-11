import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BytesMemoryMock, BytesMemoryMockInterface } from "../../../../contracts/tests/mocks/BytesMemoryMock";
type BytesMemoryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesMemoryMock__factory extends ContractFactory {
    constructor(...args: BytesMemoryMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BytesMemoryMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BytesMemoryMock__factory;
    static readonly bytecode = "0x6080806040523460155761058d908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063328f3db8146101cc5780633813b76b146101b55780635e22a6551461019b578063a47ace4e14610118578063c2d55993146100a95763e7a20bd01461005b575f80fd5b346100a5576100a161008461006f366102d3565b5f602061007a6101e3565b82815201526104b1565b604051918291829190916020806040830194805184520151910152565b0390f35b5f80fd5b346100a5577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601608081126100a5576040136100a5576100a16100846100ee6101e3565b600435815260243560208201525f60206101066101e3565b828152015260643590604435906104cf565b346100a55760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a55760043567ffffffffffffffff81116100a55761018f61018a61017d61006f6101766100a1953690600401610378565b3691610274565b60443590602435906104cf565b610479565b60405191829182610330565b346100a5576100a16100846101af366103a6565b9161040f565b346100a5576100a161018f61018a6101af366103a6565b346100a5576100a161018f61018a61006f366102d3565b604051906040820182811067ffffffffffffffff82111761020357604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f604051930116820182811067ffffffffffffffff82111761020357604052565b92919267ffffffffffffffff8211610203576102b760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85011601610230565b93828552828201116100a557815f926020928387013784010152565b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126100a5576004359067ffffffffffffffff82116100a557806023830112156100a55781602461032d93600401359101610274565b90565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602060409481855280519182918282880152018686015e5f8582860101520116010190565b9181601f840112156100a55782359167ffffffffffffffff83116100a557602083818601950101116100a557565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8201126100a5576004359067ffffffffffffffff82116100a5576103ef91600401610378565b909160243590565b67ffffffffffffffff81116102035760051b60200190565b6104749161032d935f60206104226101e3565b82815201527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe061046561045c610457846103f7565b610230565b928084526103f7565b01906020369101373691610274565b6104b1565b906020825192015160405192602082850101604052818452602082115f146104a85781602085019160045afa50565b51602084015250565b906104ba6101e3565b9160208301905f825283602082019052519052565b9291906104da6101e3565b5f815260208101915f8352819584820180831161052a57602082015110610502575101905252565b7fb4120f14000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea2646970667358221220765648d147e566880b1402ff840574d659bf9759bdae1fea83956ee44cabb43e64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "OutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pointer";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesMemory.Slice";
            readonly name: "data";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "size";
            readonly type: "uint256";
        }];
        readonly name: "slice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pointer";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesMemory.Slice";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "wrap";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pointer";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesMemory.Slice";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "wrapAndUnwrap";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ret";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "n";
            readonly type: "uint256";
        }];
        readonly name: "wrapWithNonDefaultPointer";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pointer";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "length";
                readonly type: "uint256";
            }];
            readonly internalType: "struct BytesMemory.Slice";
            readonly name: "";
            readonly type: "tuple";
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
            readonly name: "n";
            readonly type: "uint256";
        }];
        readonly name: "wrapWithNonDefaultPointerAndUnwrap";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ret";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "size";
            readonly type: "uint256";
        }];
        readonly name: "wrapWithSliceAndUnwrap";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "ret";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BytesMemoryMockInterface;
    static connect(address: string, runner?: ContractRunner | null): BytesMemoryMock;
}
export {};
