import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ERC20bytes32Capitals, ERC20bytes32CapitalsInterface } from "../../../../../contracts/tests/mocks/UniERC20Helper.sol/ERC20bytes32Capitals";
type ERC20bytes32CapitalsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20bytes32Capitals__factory extends ContractFactory {
    constructor(...args: ERC20bytes32CapitalsConstructorParams);
    getDeployTransaction(name: BytesLike, symbol: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(name: BytesLike, symbol: BytesLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20bytes32Capitals & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20bytes32Capitals__factory;
    static readonly bytecode = "0x608034605557601f61014538819003918201601f19168301916001600160401b03831184841017605957808492604094855283398101031260555760208151910151905f5560015560405160d7908161006e8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe60808060405260043610156011575f80fd5b5f3560e01c908163a3f4df7e14606c575063f76f8d7814602f575f80fd5b346068575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126068576020600154604051908152f35b5f80fd5b346068575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126068576020905f548152f3fea2646970667358221220bf6e97036a1641696eb643c3495684fb9c9898df8ded7e676cb2ca4d6b3425b564736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "name";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "symbol";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "NAME";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "SYMBOL";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC20bytes32CapitalsInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20bytes32Capitals;
}
export {};
