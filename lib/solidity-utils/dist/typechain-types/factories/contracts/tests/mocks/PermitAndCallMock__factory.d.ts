import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { PermitAndCallMock, PermitAndCallMockInterface } from "../../../../contracts/tests/mocks/PermitAndCallMock";
type PermitAndCallMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermitAndCallMock__factory extends ContractFactory {
    constructor(...args: PermitAndCallMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<PermitAndCallMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): PermitAndCallMock__factory;
    static readonly bytecode = "0x6080806040523460155761068b908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081635816d723146100ea57508063c2985578146100965763d16170671461003d575f80fd5b5f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610092577fa143729f1e064742494ee223fd9347d2eb1ea559fcad61e62d2568b526a7a6866020604051348152a1005b5f80fd5b34610092575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610092577fac43e28cd59e04fe2babb4a4ca6294dda7f889b2c5352db2088b5618e57d8cf65f80a1005b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100925760043567ffffffffffffffff811161009257610134903690600401610627565b9160243567ffffffffffffffff811161009257610155903690600401610627565b909383357fffffffffffffffffffffffffffffffffffffffff000000000000000000000000811690601483106105f3575b5060601c9381601411610092575f94859485938360148695017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec8301914680610144146105dc578061012c146105dc57610104146105c6576e22d473030f116ddee9f6b43ac78ba3905b8390816064146105095781604814610441578160e0146104035781610100146103c357816060146102d25750610160146102945750917ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff09186937f9fd5a6cf000000000000000000000000000000000000000000000000000000008652600486013701925af1505b8060405194853783305af43d5f833e15610290573d90f35b3d90fd5b91506101649450859250610160907f2b67b57000000000000000000000000000000000000000000000000000000000855260048501375af150610278565b905087945060549193506014602093610164987f2b67b5700000000000000000000000000000000000000000000000000000000089523360048a0152602489015260508801377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602882013560e01c0165ffffffffffff166064870152602c81013560e01c60848701523060a48701527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff603082013560e01c0165ffffffffffff1660c487015261010060e487015260406101048701528260348201610124880137016101448501375af150610278565b505050859250610104949150610100907f8fcbaf0c00000000000000000000000000000000000000000000000000000000855260048501375af150610278565b50505085925060e494915060e0907fd505accf00000000000000000000000000000000000000000000000000000000855260048501375af150610278565b8895506101049794507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff93925060209150601c907f8fcbaf0c000000000000000000000000000000000000000000000000000000008852336004890152306024890152603c810135933560e01c60448901527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff601882013560e01c016064890152600160848901528360ff1c601b0160a48901520160c48701371660e48401525af150610278565b88955060e49794507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff939250602091506038907fd505accf0000000000000000000000000000000000000000000000000000000088523360048901523060248901528260588201359460448a01377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff603482013560e01c0160648901528360ff1c601b0160848901520160a48701371660c48401525af150610278565b6e225e31d15943971f47ad3022f714fa906101f0565b506e225e31d15943971f47ad3022f714fa906101f0565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008092508360140360031b1b161686610186565b9181601f840112156100925782359167ffffffffffffffff831161009257602083818601950101116100925756fea2646970667358221220a6ec9fac0d0f9bc03fae0ea8e58111259d8fdcc926686fe04b18ecb821e40ac764736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "FooCalled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "MsgValue";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "foo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "payableFoo";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "permit";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "action";
            readonly type: "bytes";
        }];
        readonly name: "permitAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): PermitAndCallMockInterface;
    static connect(address: string, runner?: ContractRunner | null): PermitAndCallMock;
}
export {};
