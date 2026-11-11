import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface TransientMockInterface extends Interface {
    getFunction(nameOrSignature: "dec" | "decWithException" | "inc" | "incFromMaxValue" | "incFromMaxValueWithException" | "incWithException" | "initAndAdd" | "tloadAddress" | "tloadBytes32" | "tloadUint" | "tstoreAddress" | "tstoreBytes32" | "tstoreUint" | "unsafeDec" | "unsafeInc"): FunctionFragment;
    encodeFunctionData(functionFragment: "dec", values?: undefined): string;
    encodeFunctionData(functionFragment: "decWithException", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "inc", values?: undefined): string;
    encodeFunctionData(functionFragment: "incFromMaxValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "incFromMaxValueWithException", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "incWithException", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "initAndAdd", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "tloadAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "tloadBytes32", values?: undefined): string;
    encodeFunctionData(functionFragment: "tloadUint", values?: undefined): string;
    encodeFunctionData(functionFragment: "tstoreAddress", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "tstoreBytes32", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tstoreUint", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unsafeDec", values?: undefined): string;
    encodeFunctionData(functionFragment: "unsafeInc", values?: undefined): string;
    decodeFunctionResult(functionFragment: "dec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decWithException", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "inc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incFromMaxValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incFromMaxValueWithException", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incWithException", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initAndAdd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tloadAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tloadBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tloadUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tstoreAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tstoreBytes32", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tstoreUint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeDec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsafeInc", data: BytesLike): Result;
}
export interface TransientMock extends BaseContract {
    connect(runner?: ContractRunner | null): TransientMock;
    waitForDeployment(): Promise<this>;
    interface: TransientMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    dec: TypedContractMethod<[], [bigint], "nonpayable">;
    decWithException: TypedContractMethod<[
        exception: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    inc: TypedContractMethod<[], [bigint], "nonpayable">;
    incFromMaxValue: TypedContractMethod<[], [bigint], "nonpayable">;
    incFromMaxValueWithException: TypedContractMethod<[
        exception: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    incWithException: TypedContractMethod<[
        exception: BytesLike
    ], [
        bigint
    ], "nonpayable">;
    initAndAdd: TypedContractMethod<[
        initialValue: BigNumberish,
        toAdd: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    tloadAddress: TypedContractMethod<[], [string], "view">;
    tloadBytes32: TypedContractMethod<[], [string], "view">;
    tloadUint: TypedContractMethod<[], [bigint], "view">;
    tstoreAddress: TypedContractMethod<[
        value: AddressLike
    ], [
        void
    ], "nonpayable">;
    tstoreBytes32: TypedContractMethod<[value: BytesLike], [void], "nonpayable">;
    tstoreUint: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    unsafeDec: TypedContractMethod<[], [bigint], "nonpayable">;
    unsafeInc: TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "dec"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "decWithException"): TypedContractMethod<[exception: BytesLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "inc"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "incFromMaxValue"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "incFromMaxValueWithException"): TypedContractMethod<[exception: BytesLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "incWithException"): TypedContractMethod<[exception: BytesLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "initAndAdd"): TypedContractMethod<[
        initialValue: BigNumberish,
        toAdd: BigNumberish
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "tloadAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tloadBytes32"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tloadUint"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "tstoreAddress"): TypedContractMethod<[value: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "tstoreBytes32"): TypedContractMethod<[value: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "tstoreUint"): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "unsafeDec"): TypedContractMethod<[], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "unsafeInc"): TypedContractMethod<[], [bigint], "nonpayable">;
    filters: {};
}
