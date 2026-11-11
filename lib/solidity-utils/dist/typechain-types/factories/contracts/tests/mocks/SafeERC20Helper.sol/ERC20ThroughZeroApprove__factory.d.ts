import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ERC20ThroughZeroApprove, ERC20ThroughZeroApproveInterface } from "../../../../../contracts/tests/mocks/SafeERC20Helper.sol/ERC20ThroughZeroApprove";
type ERC20ThroughZeroApproveConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20ThroughZeroApprove__factory extends ContractFactory {
    constructor(...args: ERC20ThroughZeroApproveConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20ThroughZeroApprove & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20ThroughZeroApprove__factory;
    static readonly bytecode = "0x608080604052346015576102e0908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c8063095ea7b3146100f157806380b5e133146100ec578063bbf72f3d146100ec5763dd62ed3e14610045575f80fd5b346100e85760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e85761007c61021a565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036100e85773ffffffffffffffffffffffffffffffffffffffff165f525f60205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f52602052602060405f2054604051908152f35b5f80fd5b61023d565b346100e85760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e85761012861021a565b60243590335f525f60205260405f2073ffffffffffffffffffffffffffffffffffffffff82165f5260205260405f2054151580610211575b6101e95760015460ff8160081c166101e95760ff8116806101e1575b6101b2575b50335f525f60205273ffffffffffffffffffffffffffffffffffffffff60405f2091165f5260205260405f20555f80f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001760015582610181565b50821561017c565b7f14ca8d1e000000000000000000000000000000000000000000000000000000005f5260045ffd5b50811515610160565b6004359073ffffffffffffffffffffffffffffffffffffffff821682036100e857565b346100e85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100e8576004358015158091036100e85760ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600154169116176001555f80f3fea2646970667358221220155be19af5088c455a2334a77871a53b3c6723214cd990728e2dec1d4620365a64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "NonZeroToNonZeroApprove";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
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
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "fail";
            readonly type: "bool";
        }];
        readonly name: "setFailAfterZeroReset";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "fail";
            readonly type: "bool";
        }];
        readonly name: "setFailFlag";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC20ThroughZeroApproveInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20ThroughZeroApprove;
}
export {};
