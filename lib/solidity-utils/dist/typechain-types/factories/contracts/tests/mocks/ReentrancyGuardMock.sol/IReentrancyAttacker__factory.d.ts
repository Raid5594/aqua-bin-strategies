import { type ContractRunner } from "ethers";
import type { IReentrancyAttacker, IReentrancyAttackerInterface } from "../../../../../contracts/tests/mocks/ReentrancyGuardMock.sol/IReentrancyAttacker";
export declare class IReentrancyAttacker__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "attack";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "attackCustomLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IReentrancyAttackerInterface;
    static connect(address: string, runner?: ContractRunner | null): IReentrancyAttacker;
}
