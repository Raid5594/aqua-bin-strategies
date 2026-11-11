import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { SafeWETHWrapper, SafeWETHWrapperInterface } from "../../../../../contracts/tests/mocks/SafeERC20Helper.sol/SafeWETHWrapper";
type SafeWETHWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SafeWETHWrapper__factory extends ContractFactory {
    constructor(...args: SafeWETHWrapperConstructorParams);
    getDeployTransaction(token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<SafeWETHWrapper & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): SafeWETHWrapper__factory;
    static readonly bytecode = "0x608034606f57601f61029138819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b03191691909117905560405161020990816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604052600436101561001a575b3615610018575f80fd5b005b5f3560e01c80632e1a7d4d1461014d578063c86283c8146100c25763d0e30db00361000e575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100be575f8060048173ffffffffffffffffffffffffffffffffffffffff8154167fd0e30db000000000000000000000000000000000000000000000000000000000825234905af1156100b357005b6040513d5f823e3d90fd5b5f80fd5b346100be5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100be5760043560243573ffffffffffffffffffffffffffffffffffffffff81168082036100be576101368373ffffffffffffffffffffffffffffffffffffffff5f541661019b565b300361013e57005b5f80809381935af1156100b357005b346100be5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100be5761001860043573ffffffffffffffffffffffffffffffffffffffff5f54165b60245f8080949381947f2e1a7d4d0000000000000000000000000000000000000000000000000000000083526004525af1156100b35756fea26469706673582212207bf60ab2d88e1ad1bc359d5c65a511d646743d30b306732d3c13e8fcd06cf3ba64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IWETH";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "withdrawTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): SafeWETHWrapperInterface;
    static connect(address: string, runner?: ContractRunner | null): SafeWETHWrapper;
}
export {};
