import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface SimulatorMockInterface extends Interface {
    getFunction(nameOrSignature: "getValue" | "setValue" | "simulate" | "value"): FunctionFragment;
    encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
    encodeFunctionData(functionFragment: "setValue", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "simulate", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "value", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "simulate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
}
export interface SimulatorMock extends BaseContract {
    connect(runner?: ContractRunner | null): SimulatorMock;
    waitForDeployment(): Promise<this>;
    interface: SimulatorMockInterface;
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
    setValue: TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    simulate: TypedContractMethod<[
        delegatee: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    value: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getValue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setValue"): TypedContractMethod<[_value: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "simulate"): TypedContractMethod<[
        delegatee: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "value"): TypedContractMethod<[], [bigint], "view">;
    filters: {};
}
