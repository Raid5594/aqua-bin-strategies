import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Simulator, SimulatorInterface } from "../../../contracts/mixins/Simulator";
type SimulatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Simulator__factory extends ContractFactory {
    constructor(...args: SimulatorConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Simulator & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Simulator__factory;
    static readonly bytecode = "0x6080806040523460155761029a908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c63bd61951d14610025575f80fd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610260576004359073ffffffffffffffffffffffffffffffffffffffff8216808303610260576024359267ffffffffffffffff841161026057366023850112156102605783600401359267ffffffffffffffff84116102605760248501946024853692010111610260575f918185878594378086810184815203915af43d1561022c573d9067ffffffffffffffff82116101ff57604051917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116830183811067ffffffffffffffff8211176101ff57602060a4947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8399829682966040528452835f863d92013e5b806040519c8d9b7fade19139000000000000000000000000000000000000000000000000000000008d5260048d0152608060248d01528160848d01528a8c01375f89828c0101520116870194151560448801527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8688870301016064880152805191829182888801520160c486015e5f878683870101015201160101030190fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60a4907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60208096838360609261015e565b5f80fdfea26469706673582212207fb3cb5cdabdd3241f8107ae61f31b178f238571d6edb99da12e1b33e009d4b064736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "result";
            readonly type: "bytes";
        }];
        readonly name: "Simulated";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "simulate";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): SimulatorInterface;
    static connect(address: string, runner?: ContractRunner | null): Simulator;
}
export {};
