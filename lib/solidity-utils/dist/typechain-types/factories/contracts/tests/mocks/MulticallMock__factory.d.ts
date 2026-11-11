import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { MulticallMock, MulticallMockInterface } from "../../../../contracts/tests/mocks/MulticallMock";
type MulticallMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MulticallMock__factory extends ContractFactory {
    constructor(...args: MulticallMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MulticallMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MulticallMock__factory;
    static readonly bytecode = "0x608080604052346015576104e5908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c908163209652551461047857508063256fec88146104275780633fa4f245146103ed5780634926c4c6146103e45780635524107714610384578063ac9650d8146101e3578063d09de08a146101585763ee781e4c14610074575f80fd5b346101545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101545760043567ffffffffffffffff8111610154573660238201121561015457806004013567ffffffffffffffff8111610154573660248284010111610154576024917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f836044946040519687957f8d6ea8be00000000000000000000000000000000000000000000000000000000875260206004880152828288015201868601375f85828601015201168101030190fd5b5f80fd5b34610154575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610154575f547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146101b6576001015f55005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b346101545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101545760043567ffffffffffffffff8111610154573660238201121561015457806004013567ffffffffffffffff8111610154573660248260051b8401011161015457905f907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbd81360301915b838110156103825760248160051b830101358381121561015457820160248101359067ffffffffffffffff821161015457604401813603811361015457815f92918392604051928392833781018381520390305af43d1561037d573d67ffffffffffffffff811161035057604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116820182811067ffffffffffffffff8211176103505760405281525f60203d92013e5b156103455760010161027c565b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610338565b005b346101545760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610154576004355f55600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055005b34610154575f80fd5b34610154575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101545760205f54604051908152f35b34610154575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261015457602073ffffffffffffffffffffffffffffffffffffffff60015416604051908152f35b34610154575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610154576020905f548152f3fea2646970667358221220e996203d00c83164ec65722253a211c4179cc57390826d37df0f388861d6b53664736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }];
        readonly name: "CustomError";
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
        readonly inputs: readonly [];
        readonly name: "increment";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lastSender";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "revertEmpty";
        readonly outputs: readonly [];
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
    static createInterface(): MulticallMockInterface;
    static connect(address: string, runner?: ContractRunner | null): MulticallMock;
}
export {};
