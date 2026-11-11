import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface SimulatorTargetInterface extends Interface {
    getFunction(nameOrSignature: "getValue" | "returnData" | "revertWithMessage" | "setValue" | "value"): FunctionFragment;
    encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "returnData", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "revertWithMessage", values: [string]): string;
    encodeFunctionData(functionFragment: "setValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "value", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "returnData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertWithMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
}
export interface SimulatorTarget extends BaseContract {
    connect(runner?: ContractRunner | null): SimulatorTarget;
    waitForDeployment(): Promise<this>;
    interface: SimulatorTargetInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getValue: TypedContractMethod<[], [bigint], "view">;
    returnData: TypedContractMethod<[data: BytesLike], [string], "view">;
    revertWithMessage: TypedContractMethod<[message: string], [void], "view">;
    setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    value: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "returnData"): TypedContractMethod<[data: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "revertWithMessage"): TypedContractMethod<[message: string], [void], "view">;
    getFunction(nameOrSignature: "setValue"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "value"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
