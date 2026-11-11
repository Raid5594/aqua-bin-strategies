import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface ReentrancyGuardMockInterface extends Interface {
    getFunction(nameOrSignature: "callOnlyInProtectedContext" | "callOnlyInProtectedContextCustomLock" | "callOnlyInProtectedContextCustomLockWithoutGuard" | "callOnlyInProtectedContextWithoutGuard" | "checkInNonReentrantCall" | "counter" | "inNonReentrantCall" | "onlyInProtectedContext" | "onlyInProtectedContextCustomLock" | "protectedIncrement" | "protectedIncrementAndCall" | "protectedIncrementWithCustomLock" | "protectedIncrementWithCustomLockAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "callOnlyInProtectedContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "callOnlyInProtectedContextCustomLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "callOnlyInProtectedContextCustomLockWithoutGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "callOnlyInProtectedContextWithoutGuard", values?: undefined): string;
    encodeFunctionData(functionFragment: "checkInNonReentrantCall", values?: undefined): string;
    encodeFunctionData(functionFragment: "counter", values?: undefined): string;
    encodeFunctionData(functionFragment: "inNonReentrantCall", values?: undefined): string;
    encodeFunctionData(functionFragment: "onlyInProtectedContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "onlyInProtectedContextCustomLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "protectedIncrement", values?: undefined): string;
    encodeFunctionData(functionFragment: "protectedIncrementAndCall", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "protectedIncrementWithCustomLock", values?: undefined): string;
    encodeFunctionData(functionFragment: "protectedIncrementWithCustomLockAndCall", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "callOnlyInProtectedContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnlyInProtectedContextCustomLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnlyInProtectedContextCustomLockWithoutGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callOnlyInProtectedContextWithoutGuard", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkInNonReentrantCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "counter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inNonReentrantCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyInProtectedContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onlyInProtectedContextCustomLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedIncrement", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedIncrementAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedIncrementWithCustomLock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "protectedIncrementWithCustomLockAndCall", data: BytesLike): Result;
}
export interface ReentrancyGuardMock extends BaseContract {
    connect(runner?: ContractRunner | null): ReentrancyGuardMock;
    waitForDeployment(): Promise<this>;
    interface: ReentrancyGuardMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    callOnlyInProtectedContext: TypedContractMethod<[], [void], "nonpayable">;
    callOnlyInProtectedContextCustomLock: TypedContractMethod<[
    ], [
        void
    ], "nonpayable">;
    callOnlyInProtectedContextCustomLockWithoutGuard: TypedContractMethod<[
    ], [
        void
    ], "nonpayable">;
    callOnlyInProtectedContextWithoutGuard: TypedContractMethod<[
    ], [
        void
    ], "nonpayable">;
    checkInNonReentrantCall: TypedContractMethod<[], [boolean], "nonpayable">;
    counter: TypedContractMethod<[], [bigint], "view">;
    inNonReentrantCall: TypedContractMethod<[], [boolean], "view">;
    onlyInProtectedContext: TypedContractMethod<[], [void], "nonpayable">;
    onlyInProtectedContextCustomLock: TypedContractMethod<[
    ], [
        void
    ], "nonpayable">;
    protectedIncrement: TypedContractMethod<[], [void], "nonpayable">;
    protectedIncrementAndCall: TypedContractMethod<[
        target: AddressLike
    ], [
        void
    ], "nonpayable">;
    protectedIncrementWithCustomLock: TypedContractMethod<[
    ], [
        void
    ], "nonpayable">;
    protectedIncrementWithCustomLockAndCall: TypedContractMethod<[
        target: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "callOnlyInProtectedContext"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "callOnlyInProtectedContextCustomLock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "callOnlyInProtectedContextCustomLockWithoutGuard"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "callOnlyInProtectedContextWithoutGuard"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "checkInNonReentrantCall"): TypedContractMethod<[], [boolean], "nonpayable">;
    getFunction(nameOrSignature: "counter"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "inNonReentrantCall"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "onlyInProtectedContext"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "onlyInProtectedContextCustomLock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "protectedIncrement"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "protectedIncrementAndCall"): TypedContractMethod<[target: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "protectedIncrementWithCustomLock"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "protectedIncrementWithCustomLockAndCall"): TypedContractMethod<[target: AddressLike], [void], "nonpayable">;
    filters: {};
}
