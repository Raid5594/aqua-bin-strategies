import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { AddressArray, AddressArrayInterface } from "../../../contracts/libraries/AddressArray";
type AddressArrayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AddressArray__factory extends ContractFactory {
    constructor(...args: AddressArrayConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AddressArray & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AddressArray__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea2646970667358221220c8c4f3f719af02da1f290f5d952be99bcf9bbd85444d6d9e30d12b71d2b50ec164736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IndexOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OutputArrayTooSmall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PopFromEmptyArray";
        readonly type: "error";
    }];
    static createInterface(): AddressArrayInterface;
    static connect(address: string, runner?: ContractRunner | null): AddressArray;
}
export {};
