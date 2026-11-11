import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ReentrancyAttacker, ReentrancyAttackerInterface } from "../../../../../contracts/tests/mocks/ReentrancyGuardMock.sol/ReentrancyAttacker";
type ReentrancyAttackerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReentrancyAttacker__factory extends ContractFactory {
    constructor(...args: ReentrancyAttackerConstructorParams);
    getDeployTransaction(_target: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_target: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ReentrancyAttacker & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ReentrancyAttacker__factory;
    static readonly bytecode = "0x608034606f57601f61044338819003918201601f19168301916001600160401b03831184841017607357808492602094604052833981010312606f57516001600160a01b03811690819003606f575f80546001600160a01b0319169190911790556040516103bb90816100888239f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080806040526004361015610012575f80fd5b5f905f3560e01c9081631105f941146102d85750806356a57070146102885780638de6e6a0146101915780639e5faafc1461009a5763dafaf7b114610055575f80fd5b3461009757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100975760ff6020915460a81c166040519015158152f35b80fd5b503461009757807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100975780805460ff8160a01c16156100db5750f35b7fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff81167401000000000000000000000000000000000000000017825573ffffffffffffffffffffffffffffffffffffffff16803b1561018e578180916004604051809481937f0f648d6d0000000000000000000000000000000000000000000000000000000083525af18015610183576101725750f35b8161017c91610317565b6100975780f35b6040513d84823e3d90fd5b50fd5b5034610284575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610284575f5460ff8160a81c16156101d2575080f35b7fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff81167501000000000000000000000000000000000000000000175f5573ffffffffffffffffffffffffffffffffffffffff16803b15610284575f80916004604051809481937fac2cecb00000000000000000000000000000000000000000000000000000000083525af180156102795761026b575080f35b61027791505f90610317565b005b6040513d5f823e3d90fd5b5f80fd5b34610284575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261028457602073ffffffffffffffffffffffffffffffffffffffff5f5416604051908152f35b34610284575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102845760209060ff5f5460a01c1615158152f35b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761035857604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffdfea2646970667358221220d0b363f123d24bc61b3acf4dcb91955121850bc77aa7add32f2a4f1ed956e0b864736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "attack";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "attackCustomLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "attacked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "attackedCustomLock";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "guardTarget";
        readonly outputs: readonly [{
            readonly internalType: "contract ReentrancyGuardMock";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ReentrancyAttackerInterface;
    static connect(address: string, runner?: ContractRunner | null): ReentrancyAttacker;
}
export {};
