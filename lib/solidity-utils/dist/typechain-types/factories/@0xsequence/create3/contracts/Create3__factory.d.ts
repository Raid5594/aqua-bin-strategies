import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Create3, Create3Interface } from "../../../../@0xsequence/create3/contracts/Create3";
type Create3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Create3__factory extends ContractFactory {
    constructor(...args: Create3ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Create3 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Create3__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220264161cd912880cb04383753ba50137c111b6e5bb3bdeb6ad19683f315b0d60b64736f6c634300081e0033";
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
    }];
    static createInterface(): Create3Interface;
    static connect(address: string, runner?: ContractRunner | null): Create3;
}
export {};
