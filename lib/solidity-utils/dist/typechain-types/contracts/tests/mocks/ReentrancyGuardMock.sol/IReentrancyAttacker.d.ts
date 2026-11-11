import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface IReentrancyAttackerInterface extends Interface {
    getFunction(nameOrSignature: "attack" | "attackCustomLock"): FunctionFragment;
    encodeFunctionData(functionFragment: "attack", values?: undefined): string;
    encodeFunctionData(functionFragment: "attackCustomLock", values?: undefined): string;
    decodeFunctionResult(functionFragment: "attack", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "attackCustomLock", data: BytesLike): Result;
}
export interface IReentrancyAttacker extends BaseContract {
    connect(runner?: ContractRunner | null): IReentrancyAttacker;
    waitForDeployment(): Promise<this>;
    interface: IReentrancyAttackerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    attack: TypedContractMethod<[], [void], "nonpayable">;
    attackCustomLock: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "attack"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "attackCustomLock"): TypedContractMethod<[], [void], "nonpayable">;
    filters: {};
}
