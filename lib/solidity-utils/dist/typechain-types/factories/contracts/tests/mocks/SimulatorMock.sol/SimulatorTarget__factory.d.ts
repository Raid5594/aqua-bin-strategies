import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { SimulatorTarget, SimulatorTargetInterface } from "../../../../../contracts/tests/mocks/SimulatorMock.sol/SimulatorTarget";
type SimulatorTargetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SimulatorTarget__factory extends ContractFactory {
    constructor(...args: SimulatorTargetConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SimulatorTarget & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SimulatorTarget__factory;
    static readonly bytecode = "0x6080806040523460155761035d908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c90816320965255146102c2575080633fa4f24514610288578063473bed231461014e57806355241077146101185763ee781e4c14610053575f80fd5b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145760043567ffffffffffffffff8111610114576100a460449136906004016102f9565b91907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f846040519586947f08c379a000000000000000000000000000000000000000000000000000000000865260206004870152816024870152868601375f85828601015201168101030190fd5b5f80fd5b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576004355f55005b346101145760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145760043567ffffffffffffffff81116101145761019d9036906004016102f9565b9067ffffffffffffffff821161025b576040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8601160116810181811067ffffffffffffffff82111761025b5760405282815260208101923681840111610114576020815f926040958737830101527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8351948593602085525180918160208701528686015e5f85828601015201168101030190f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101145760205f54604051908152f35b34610114575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610114576020905f548152f35b9181601f840112156101145782359167ffffffffffffffff831161011457602083818601950101116101145756fea264697066735822122018053c97b16bf6dedec6015ee80f74beadf3b80fa60fae92b8b4cff3b12dbbfa64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "returnData";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "revertWithMessage";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "setValue";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "value";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): SimulatorTargetInterface;
    static connect(address: string, runner?: ContractRunner | null): SimulatorTarget;
}
export {};
