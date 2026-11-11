import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { UniERC20, UniERC20Interface } from "../../../contracts/libraries/UniERC20";
type UniERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UniERC20__factory extends ContractFactory {
    constructor(...args: UniERC20ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<UniERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): UniERC20__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea26469706673582212204ff12ab4f44391e0897a4342d394c7231d82c1e74eec8b3f39a37f0e056933de64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ApproveCalledOnETH";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FromIsNotSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotEnoughValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ToIsNotThis";
        readonly type: "error";
    }];
    static createInterface(): UniERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): UniERC20;
}
export {};
