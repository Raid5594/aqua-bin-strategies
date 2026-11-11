import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { SafeERC20, SafeERC20Interface } from "../../../contracts/libraries/SafeERC20";
type SafeERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeERC20__factory extends ContractFactory {
    constructor(...args: SafeERC20ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SafeERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SafeERC20__factory;
    static readonly bytecode = "0x6080806040523460175760399081601c823930815050f35b5f80fdfe5f80fdfea264697066735822122038b73a27f4bbe3d2fcdbbb38308abf83962fb1a56235bcf17ec72664e922b53864736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ForceApproveFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Permit2TransferAmountTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SafeDecreaseAllowanceFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SafeIncreaseAllowanceFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SafePermitBadLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SafeTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SafeTransferFromFailed";
        readonly type: "error";
    }];
    static createInterface(): SafeERC20Interface;
    static connect(address: string, runner?: ContractRunner | null): SafeERC20;
}
export {};
