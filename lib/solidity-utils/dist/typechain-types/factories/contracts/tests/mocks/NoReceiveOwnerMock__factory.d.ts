import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { NoReceiveOwnerMock, NoReceiveOwnerMockInterface } from "../../../../contracts/tests/mocks/NoReceiveOwnerMock";
type NoReceiveOwnerMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NoReceiveOwnerMock__factory extends ContractFactory {
    constructor(...args: NoReceiveOwnerMockConstructorParams);
    getDeployTransaction(target: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(target: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<NoReceiveOwnerMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): NoReceiveOwnerMock__factory;
    static readonly bytecode = "0x60a034606557601f61020338819003918201601f19168301916001600160401b03831184841017606957808492602094604052833981010312606557516001600160a01b0381168103606557608052604051610185908161007e823960805181608e0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c6378e3214f14610027575f80fd5b3461014b5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b5760043573ffffffffffffffffffffffffffffffffffffffff811680910361014b5773ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016803b1561014b576044835f819381957f78e3214f000000000000000000000000000000000000000000000000000000008452600484015260243560248401525af18015610140576100fd575080f35b905067ffffffffffffffff811161011357604052005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040513d5f823e3d90fd5b5f80fdfea26469706673582212209a42ccaae1dff7f56eca9ac7df2eb1dafd36f0b4c709806e2973bdf7b443b4cd64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IRescuable";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
    static createInterface(): NoReceiveOwnerMockInterface;
    static connect(address: string, runner?: ContractRunner | null): NoReceiveOwnerMock;
}
export {};
