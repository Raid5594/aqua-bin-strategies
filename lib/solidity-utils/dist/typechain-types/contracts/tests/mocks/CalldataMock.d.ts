import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface CalldataMockInterface extends Interface {
    getFunction(nameOrSignature: "sliceToEnd" | "sliceToEndChecked" | "sliceWithBounds" | "sliceWithBoundsChecked"): FunctionFragment;
    encodeFunctionData(functionFragment: "sliceToEnd", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sliceToEndChecked", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sliceWithBounds", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sliceWithBoundsChecked", values: [BytesLike, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "sliceToEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sliceToEndChecked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sliceWithBounds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sliceWithBoundsChecked", data: BytesLike): Result;
}
export interface CalldataMock extends BaseContract {
    connect(runner?: ContractRunner | null): CalldataMock;
    waitForDeployment(): Promise<this>;
    interface: CalldataMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    sliceToEnd: TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish
    ], [
        string
    ], "view">;
    sliceToEndChecked: TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish
    ], [
        string
    ], "view">;
    sliceWithBounds: TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish,
        end: BigNumberish
    ], [
        string
    ], "view">;
    sliceWithBoundsChecked: TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish,
        end: BigNumberish
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "sliceToEnd"): TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "sliceToEndChecked"): TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "sliceWithBounds"): TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish,
        end: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "sliceWithBoundsChecked"): TypedContractMethod<[
        data: BytesLike,
        begin: BigNumberish,
        end: BigNumberish
    ], [
        string
    ], "view">;
    filters: {};
}
