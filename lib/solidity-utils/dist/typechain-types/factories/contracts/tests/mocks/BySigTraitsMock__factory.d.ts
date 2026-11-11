import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BySigTraitsMock, BySigTraitsMockInterface } from "../../../../contracts/tests/mocks/BySigTraitsMock";
type BySigTraitsMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BySigTraitsMock__factory extends ContractFactory {
    constructor(...args: BySigTraitsMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BySigTraitsMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BySigTraitsMock__factory;
    static readonly bytecode = "0x60808060405234601557610247908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f3560e01c9081631941c38614610184575080639c7091c6146100de578063c40dc8ec146100995763ce03fdab14610048575f80fd5b346100955760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100955760206040516fffffffffffffffffffffffffffffffff600435168152f35b5f80fd5b346100955760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261009557602060405164ffffffffff60043560d01c168152f35b346100955760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100955760043560fe1c6002811161015c57600381101561012f57602090604051908152f35b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b7f5f640821000000000000000000000000000000000000000000000000000000005f5260045ffd5b346100955760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610095576024359073ffffffffffffffffffffffffffffffffffffffff821682036100955760209169ffffffffffffffffffff60043560801c1680159182156101fb575b505015158152f35b69ffffffffffffffffffff1614905083806101f356fea26469706673582212201210fd141eaa5c0e369cb608e66f973ad604938b947359bc4cb29f4729998ef664736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "WrongNonceType";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "BySigTraits.Value";
            readonly name: "traits";
            readonly type: "uint256";
        }];
        readonly name: "deadline";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "BySigTraits.Value";
            readonly name: "traits";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "isRelayerAllowed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "BySigTraits.Value";
            readonly name: "traits";
            readonly type: "uint256";
        }];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "BySigTraits.Value";
            readonly name: "traits";
            readonly type: "uint256";
        }];
        readonly name: "nonceType";
        readonly outputs: readonly [{
            readonly internalType: "enum BySigTraits.NonceType";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): BySigTraitsMockInterface;
    static connect(address: string, runner?: ContractRunner | null): BySigTraitsMock;
}
export {};
