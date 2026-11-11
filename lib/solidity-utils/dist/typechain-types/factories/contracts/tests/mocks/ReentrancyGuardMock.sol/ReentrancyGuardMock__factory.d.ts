import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ReentrancyGuardMock, ReentrancyGuardMockInterface } from "../../../../../contracts/tests/mocks/ReentrancyGuardMock.sol/ReentrancyGuardMock";
type ReentrancyGuardMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReentrancyGuardMock__factory extends ContractFactory {
    constructor(...args: ReentrancyGuardMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ReentrancyGuardMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ReentrancyGuardMock__factory;
    static readonly bytecode = "0x608080604052346015576108c2908161001a8239f35b5f80fdfe6080806040526004361015610012575f80fd5b5f905f3560e01c90816301b1a5e014610678575080630f3b03bc146105795780630f648d6d14610504578063135f2e7114610493578063176591871461045c5780632b9b9dd11461041857806352d19175146103a35780635ad5ec5f146102a457806361bc221a146102685780636e1a9ced146101f7578063780c8709146101bd578063a895e1961461014e5763ac2cecb0146100ad575f80fd5b3461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576100e361080c565b6100ee6001546106b2565b6001557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060025c018060025d146101235780f35b807ffed3ca240000000000000000000000000000000000000000000000000000000060049252fd5b80fd5b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b57610185610875565b61018d6107c9565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80825c0180835d146101235780f35b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576101f461077a565b80f35b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576001815c036102405761023a6001546106b2565b60015580f35b807f2b38c10f0000000000000000000000000000000000000000000000000000000060049252fd5b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576020600154604051908152f35b503461014b5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b578060043573ffffffffffffffffffffffffffffffffffffffff81168091036103a0576102fe610875565b6103096001546106b2565b600155803b156103a0578180916004604051809481937f9e5faafc0000000000000000000000000000000000000000000000000000000083525af1801561039557610380575b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80915c0180835d146101235780f35b8161038a9161070c565b61014b57805f61034f565b6040513d84823e3d90fd5b50fd5b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576103da610875565b6001815c14907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80825c0180835d1461012357602082604051908152f35b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b57600160025c036102405761023a6001546106b2565b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576101f46107c9565b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b576104ca61080c565b6104d261077a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060025c018060025d146101235780f35b503461014b57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261014b5761053b610875565b6105466001546106b2565b6001557fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80825c0180835d146101235780f35b50346106745760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106745760043573ffffffffffffffffffffffffffffffffffffffff8116809103610674576105d261080c565b6105dd6001546106b2565b600155803b15610674575f80916004604051809481937f8de6e6a00000000000000000000000000000000000000000000000000000000083525af1801561066957610656575b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060025c018060025d146101235780f35b61066291505f9061070c565b5f5f610623565b6040513d5f823e3d90fd5b5f80fd5b34610674575f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126106745760209060015f5c148152f35b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106df5760010190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761074d57604052565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b303b15610674576040517f2b9b9dd10000000000000000000000000000000000000000000000000000000081525f8160048183305af18015610669576107bd5750565b5f6107c79161070c565b565b303b15610674576040517f6e1a9ced0000000000000000000000000000000000000000000000000000000081525f8160048183305af18015610669576107bd5750565b600160025c018060025d801561084d5760010361082557565b7f3e26409c000000000000000000000000000000000000000000000000000000005f5260045ffd5b7f9d565d4e000000000000000000000000000000000000000000000000000000005f5260045ffd5b60015f5c01805f5d801561084d576001036108255756fea264697066735822122058f6959398e57947630f249189f25bfae16483b9d8ee4239301d812f2877d8a364736f6c634300081e0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MissingNonReentrantModifier";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnexpectedLock";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "callOnlyInProtectedContext";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callOnlyInProtectedContextCustomLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callOnlyInProtectedContextCustomLockWithoutGuard";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callOnlyInProtectedContextWithoutGuard";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "checkInNonReentrantCall";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "counter";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "inNonReentrantCall";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "onlyInProtectedContext";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "onlyInProtectedContextCustomLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protectedIncrement";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "protectedIncrementAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "protectedIncrementWithCustomLock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "protectedIncrementWithCustomLockAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ReentrancyGuardMockInterface;
    static connect(address: string, runner?: ContractRunner | null): ReentrancyGuardMock;
}
export {};
