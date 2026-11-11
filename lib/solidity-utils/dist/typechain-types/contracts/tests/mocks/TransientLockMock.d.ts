import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface TransientLockMockInterface extends Interface {
    getFunction(nameOrSignature: "doubleLock" | "isLocked" | "lock" | "lockAndCheck" | "lockUnlockAndCheck" | "unlock" | "unlockWithoutLock"): FunctionFragment;
    encodeFunctionData(functionFragment: "doubleLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "isLocked", values?: undefined): string;
    encodeFunctionData(functionFragment: "lock", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockAndCheck", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockUnlockAndCheck", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlockWithoutLock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "doubleLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isLocked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockAndCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockUnlockAndCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockWithoutLock", data: BytesLike): Result;
}
export interface TransientLockMock extends BaseContract {
    connect(runner?: ContractRunner | null): TransientLockMock;
    waitForDeployment(): Promise<this>;
    interface: TransientLockMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    doubleLock: TypedContractMethod<[], [void], "nonpayable">;
    isLocked: TypedContractMethod<[], [boolean], "view">;
    lock: TypedContractMethod<[], [void], "nonpayable">;
    lockAndCheck: TypedContractMethod<[], [boolean], "nonpayable">;
    lockUnlockAndCheck: TypedContractMethod<[], [boolean], "nonpayable">;
    unlock: TypedContractMethod<[], [void], "nonpayable">;
    unlockWithoutLock: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "doubleLock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "isLocked"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "lock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "lockAndCheck"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "lockUnlockAndCheck"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "unlock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "unlockWithoutLock"): TypedContractMethod<[], [void], "nonpayable">;
    filters: {};
}
