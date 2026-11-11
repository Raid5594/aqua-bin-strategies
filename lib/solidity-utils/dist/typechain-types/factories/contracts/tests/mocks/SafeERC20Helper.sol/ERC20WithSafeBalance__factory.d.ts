import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ERC20WithSafeBalance, ERC20WithSafeBalanceInterface } from "../../../../../contracts/tests/mocks/SafeERC20Helper.sol/ERC20WithSafeBalance";
type ERC20WithSafeBalanceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20WithSafeBalance__factory extends ContractFactory {
    constructor(...args: ERC20WithSafeBalanceConstructorParams);
    getDeployTransaction(token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20WithSafeBalance & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20WithSafeBalance__factory;
    static readonly bytecode = "0x60a034606c57601f61031538819003918201601f19168301916001600160401b03831184841017607057808492602094604052833981010312606c57516001600160a01b0381168103606c576080526040516102909081610085823960805181818160af015261018c0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f3560e01c90816370a08231146100f7575063bd166e2f14610032575f80fd5b346100f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f35760043573ffffffffffffffffffffffffffffffffffffffff811681036100f3577f70a08231000000000000000000000000000000000000000000000000000000005f5260045260205f6024817f00000000000000000000000000000000000000000000000000000000000000005afa5f51901560203d10176100e857602090604051908152f35b6040513d5f823e3d90fd5b5f80fd5b346100f35760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100f35760043573ffffffffffffffffffffffffffffffffffffffff81168091036100f3577f70a08231000000000000000000000000000000000000000000000000000000008252600482015260208160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa80156100e8575f906101c6575b602090604051908152f35b5060203d602011610253575b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820116820182811067ffffffffffffffff821117610226576020918391604052810103126100f357602090516101bb565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b503d6101d256fea2646970667358221220e40c26dbf009d98f4e3c495845a89b705174539aa96eae00ee41d1457d188c2764736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "safeBalanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC20WithSafeBalanceInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20WithSafeBalance;
}
export {};
