import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { EthSenderMock, EthSenderMockInterface } from "../../../../contracts/tests/mocks/EthSenderMock";
type EthSenderMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EthSenderMock__factory extends ContractFactory {
    constructor(...args: EthSenderMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EthSenderMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EthSenderMock__factory;
    static readonly bytecode = "0x6080806040523460155761015d908161001a8239f35b5f80fdfe60806040526004361015610011575f80fd5b5f3560e01c631a69523014610024575f80fd5b60207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101235760043573ffffffffffffffffffffffffffffffffffffffff8116809103610123575f8080809334905af13d1561011e573d67ffffffffffffffff81116100f157604051907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f8401160116820182811067ffffffffffffffff8211176100f15760405281525f60203d92013e5b156100e657005b6040513d5f823e3d90fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6100df565b5f80fdfea26469706673582212209fd255a1bc66b38f25deaf4c0e568e8635fd809f7bc891cae1bd834cd744d7ed64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): EthSenderMockInterface;
    static connect(address: string, runner?: ContractRunner | null): EthSenderMock;
}
export {};
