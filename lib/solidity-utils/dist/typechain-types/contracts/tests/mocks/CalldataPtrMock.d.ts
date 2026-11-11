import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface CalldataPtrMockInterface extends Interface {
    getFunction(nameOrSignature: "from" | "getOffsetAndLength" | "roundTrip" | "toBytes"): FunctionFragment;
    encodeFunctionData(functionFragment: "from", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getOffsetAndLength", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "roundTrip", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "toBytes", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "from", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOffsetAndLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roundTrip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toBytes", data: BytesLike): Result;
}
export interface CalldataPtrMock extends BaseContract {
    connect(runner?: ContractRunner | null): CalldataPtrMock;
    waitForDeployment(): Promise<this>;
    interface: CalldataPtrMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    from: TypedContractMethod<[data: BytesLike], [bigint], "view">;
    getOffsetAndLength: TypedContractMethod<[
        data: BytesLike
    ], [
        [bigint, bigint] & {
            offset: bigint;
            length: bigint;
        }
    ], "view">;
    roundTrip: TypedContractMethod<[data: BytesLike], [string], "view">;
    toBytes: TypedContractMethod<[ptr: BigNumberish], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "from"): TypedContractMethod<[data: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getOffsetAndLength"): TypedContractMethod<[
        data: BytesLike
    ], [
        [bigint, bigint] & {
            offset: bigint;
            length: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "roundTrip"): TypedContractMethod<[data: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "toBytes"): TypedContractMethod<[ptr: BigNumberish], [string], "view">;
    filters: {};
}
