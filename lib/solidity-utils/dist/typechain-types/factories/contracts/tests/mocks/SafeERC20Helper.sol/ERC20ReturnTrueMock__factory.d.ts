import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ERC20ReturnTrueMock, ERC20ReturnTrueMockInterface } from "../../../../../contracts/tests/mocks/SafeERC20Helper.sol/ERC20ReturnTrueMock";
type ERC20ReturnTrueMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20ReturnTrueMock__factory extends ContractFactory {
    constructor(...args: ERC20ReturnTrueMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20ReturnTrueMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20ReturnTrueMock__factory;
    static readonly bytecode = "0x60808060405234601557610209908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063095ea7b3146100bf57806323b872dd146101065780633ba93f26146100c4578063a9059cbb146100bf5763dd62ed3e14610050575f80fd5b346100bb5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bb5773ffffffffffffffffffffffffffffffffffffffff61009c610156565b6100a4610179565b50165f525f602052602060405f2054604051908152f35b5f80fd5b61019c565b346100bb5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bb57335f525f60205260043560405f20555f80f35b346100bb5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bb5761013d610156565b50610146610179565b505f600155602060405160018152f35b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100bb57565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036100bb57565b346100bb5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100bb5761014661015656fea2646970667358221220e49b52272068cd1852f81672d94e6e1376aee740ea3f5d4e704c24928b6f836a64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "allowance_";
            readonly type: "uint256";
        }];
        readonly name: "setAllowance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC20ReturnTrueMockInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20ReturnTrueMock;
}
export {};
