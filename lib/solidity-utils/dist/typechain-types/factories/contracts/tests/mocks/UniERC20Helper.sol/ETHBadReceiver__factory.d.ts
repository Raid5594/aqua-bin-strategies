import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ETHBadReceiver, ETHBadReceiverInterface } from "../../../../../contracts/tests/mocks/UniERC20Helper.sol/ETHBadReceiver";
type ETHBadReceiverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ETHBadReceiver__factory extends ContractFactory {
    constructor(...args: ETHBadReceiverConstructorParams);
    getDeployTransaction(token: AddressLike, wrapper: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(token: AddressLike, wrapper: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ETHBadReceiver & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ETHBadReceiver__factory;
    static readonly bytecode = "0x608034609157601f61024638819003918201601f19168301916001600160401b03831184841017609557808492604094855283398101031260915780516001600160a01b0381169190829003609157602001516001600160a01b038116919082900360915760018060a01b03195f5416175f5560018060a01b0319600154161760015560405161019c90816100aa8239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610042575b50361561001a575f80fd5b7fe39ffce0000000000000000000000000000000000000000000000000000000005f5260045ffd5b5f905f3560e01c63a9059cbb14610059575061000f565b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101625760043573ffffffffffffffffffffffffffffffffffffffff81168091036101625773ffffffffffffffffffffffffffffffffffffffff6001541690813b15610162576064835f9381937f23b872dd0000000000000000000000000000000000000000000000000000000083523060048401526024830152602435604483015234905af1801561015757610114575080f35b905067ffffffffffffffff811161012a57604052005b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6040513d5f823e3d90fd5b5f80fdfea26469706673582212207244d68799775d345a9aad2a92178ef1219f5ee5a9eb9c034e556db43f160dba64736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "contract IUniERC20Wrapper";
            readonly name: "wrapper";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReceiveFailed";
        readonly type: "error";
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
        readonly name: "transfer";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ETHBadReceiverInterface;
    static connect(address: string, runner?: ContractRunner | null): ETHBadReceiver;
}
export {};
