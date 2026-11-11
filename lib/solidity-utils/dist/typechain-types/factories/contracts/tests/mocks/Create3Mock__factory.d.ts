import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Create3Mock, Create3MockInterface } from "../../../../contracts/tests/mocks/Create3Mock";
type Create3MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Create3Mock__factory extends ContractFactory {
    constructor(...args: Create3MockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Create3Mock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Create3Mock__factory;
    static readonly bytecode = "0x60808060405234601557610515908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063bb34534c146100e75763cdcb760a1461002f575f80fd5b346100e35760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e35760243560043567ffffffffffffffff82116100e357366023830112156100e35781600401359067ffffffffffffffff82116100e35736602483850101116100e3576100b26100b89260246100df95016101ee565b906103c9565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b5f80fd5b346100e35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e3576020610123600435610223565b73ffffffffffffffffffffffffffffffffffffffff60405191168152f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff8211176101af57604052565b610141565b67ffffffffffffffff81116101af57601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b906101f8816101b4565b91610206604051938461016e565b81835236828201116100e357815f92602092838601378301015290565b61037e73ffffffffffffffffffffffffffffffffffffffff806103979360405160208101917fff0000000000000000000000000000000000000000000000000000000000000083523060601b602183015260358201527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f6055820152605581526102ae60758261016e565b51902016166040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060208201927fd694000000000000000000000000000000000000000000000000000000000000845260601b1660028301527f010000000000000000000000000000000000000000000000000000000000000060168301526103628160178401037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0810183528261016e565b51902073ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b90565b3d156103c4573d906103ab826101b4565b916103b9604051938461016e565b82523d5f602084013e565b606090565b9190604051926103da60408561016e565b601084527f67363d3d37363d34f03d5260086018f300000000000000000000000000000000602085015261040d81610223565b93843b6104b7576020815191015ff573ffffffffffffffffffffffffffffffffffffffff81161561048f57815f92918360208194519301915af161044f61039a565b50158015610486575b61045e57565b7f53de54b9000000000000000000000000000000000000000000000000000000005f5260045ffd5b50813b15610458565b7fbbd2fe87000000000000000000000000000000000000000000000000000000005f5260045ffd5b7fcd43efa1000000000000000000000000000000000000000000000000000000005f5260045ffdfea26469706673582212202c9b10e730b4d691c8908b6c64ca1e62debb0d4dfe2655d04d1aa7393314567564736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ErrorCreatingContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ErrorCreatingProxy";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TargetAlreadyExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "addressOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "code";
            readonly type: "bytes";
        }];
        readonly name: "deploy";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Create3MockInterface;
    static connect(address: string, runner?: ContractRunner | null): Create3Mock;
}
export {};
