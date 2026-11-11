import { type ContractRunner } from "ethers";
import type { IRescuable, IRescuableInterface } from "../../../contracts/interfaces/IRescuable";
export declare class IRescuable__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ETHTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "rescueFunds";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRescuableInterface;
    static connect(address: string, runner?: ContractRunner | null): IRescuable;
}
