import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { Permit2ReturnTrueMock, Permit2ReturnTrueMockInterface } from "../../../../../contracts/tests/mocks/SafeERC20Helper.sol/Permit2ReturnTrueMock";
type Permit2ReturnTrueMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2ReturnTrueMock__factory extends ContractFactory {
    constructor(...args: Permit2ReturnTrueMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Permit2ReturnTrueMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Permit2ReturnTrueMock__factory;
    static readonly bytecode = "0x60808060405234601557610127908161001a8239f35b5f80fdfe608060405260043610156010575f80fd5b5f3560e01c6336c78516146022575f80fd5b3460875760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126087576055608b565b50605c60ad565b5060443573ffffffffffffffffffffffffffffffffffffffff811603608757608160cf565b505f8055005b5f80fd5b6004359073ffffffffffffffffffffffffffffffffffffffff82168203608757565b6024359073ffffffffffffffffffffffffffffffffffffffff82168203608757565b6064359073ffffffffffffffffffffffffffffffffffffffff8216820360875756fea26469706673582212206238ffe0b3c7a0e904cf6bce38c31d417c0e269f7953c751189f4bc36292e2f464736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "";
            readonly type: "uint160";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Permit2ReturnTrueMockInterface;
    static connect(address: string, runner?: ContractRunner | null): Permit2ReturnTrueMock;
}
export {};
