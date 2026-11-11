import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { SimulatorMock, SimulatorMockInterface } from "../../../../../contracts/tests/mocks/SimulatorMock.sol/SimulatorMock";
type SimulatorMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SimulatorMock__factory extends ContractFactory {
    constructor(...args: SimulatorMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SimulatorMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SimulatorMock__factory;
    static readonly bytecode = "0x60808060405234601557610366908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c90816320965255146102f9575080633fa4f245146102bf57806355241077146102895763bd61951d14610048575f80fd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760043573ffffffffffffffffffffffffffffffffffffffff811690818103610285576024359167ffffffffffffffff831161028557366023840112156102855782600401359167ffffffffffffffff83116102855760248401936024843692010111610285575f8091604051858782378086810184815203915af43d15610251573d9067ffffffffffffffff821161022457604051917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116830183811067ffffffffffffffff82111761022457602060a4947fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8399829682966040528452835f863d92013e5b806040519c8d9b7fade19139000000000000000000000000000000000000000000000000000000008d5260048d0152608060248d01528160848d01528a8c01375f89828c0101520116870194151560448801527ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc8688870301016064880152805191829182888801520160c486015e5f878683870101015201160101030190fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60a4907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f602080968383606092610183565b5f80fd5b346102855760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576004355f55005b34610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102855760205f54604051908152f35b34610285575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610285576020905f548152f3fea2646970667358221220717610126624b936b42d8852d7a474074567b9d8dbb6360a8c76eb0dd99dafa964736f6c634300081e0033";
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
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "setValue";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
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
    static createInterface(): SimulatorMockInterface;
    static connect(address: string, runner?: ContractRunner | null): SimulatorMock;
}
export {};
