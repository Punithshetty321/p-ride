/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type VEHICLEINFOStruct = {
  vehicle_no: string;
  RC: string;
  vehicleImages: string;
  vehicleType: BigNumberish;
  driver: string;
};

export type VEHICLEINFOStructOutput = [
  string,
  string,
  string,
  number,
  string
] & {
  vehicle_no: string;
  RC: string;
  vehicleImages: string;
  vehicleType: number;
  driver: string;
};

export type USERSStruct = { customer: string; driver: string };

export type USERSStructOutput = [string, string] & {
  customer: string;
  driver: string;
};

export type STATUSStruct = {
  isCancelled: boolean;
  isComplete: boolean;
  isConfirmed: boolean;
  wasCancelledBy: BigNumberish;
};

export type STATUSStructOutput = [boolean, boolean, boolean, number] & {
  isCancelled: boolean;
  isComplete: boolean;
  isConfirmed: boolean;
  wasCancelledBy: number;
};

export type RIDEDETAILSStruct = {
  pickup: string;
  destination: string;
  distance: BigNumberish;
  price: BigNumberish;
};

export type RIDEDETAILSStructOutput = [string, string, BigNumber, BigNumber] & {
  pickup: string;
  destination: string;
  distance: BigNumber;
  price: BigNumber;
};

export type RIDEStruct = {
  id: BigNumberish;
  users: USERSStruct;
  status: STATUSStruct;
  ride: RIDEDETAILSStruct;
  vehicle: VEHICLEINFOStruct;
  timestamp: string;
};

export type RIDEStructOutput = [
  BigNumber,
  USERSStructOutput,
  STATUSStructOutput,
  RIDEDETAILSStructOutput,
  VEHICLEINFOStructOutput,
  string
] & {
  id: BigNumber;
  users: USERSStructOutput;
  status: STATUSStructOutput;
  ride: RIDEDETAILSStructOutput;
  vehicle: VEHICLEINFOStructOutput;
  timestamp: string;
};

export interface RideInterface extends utils.Interface {
  functions: {
    "addVehicle(address,(string,string,string,uint8,address))": FunctionFragment;
    "cancelRide(uint256,uint8,string)": FunctionFragment;
    "completeRide(uint256,string)": FunctionFragment;
    "confirmRide((address,address),(bool,bool,bool,uint8),(string,string,uint256,uint256),string)": FunctionFragment;
    "getAllRides(uint256[])": FunctionFragment;
    "getRide(uint256)": FunctionFragment;
    "getRideCount()": FunctionFragment;
    "getVehicle(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateVehicle(address,(string,string,string,uint8,address))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addVehicle",
    values: [string, VEHICLEINFOStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelRide",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "completeRide",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmRide",
    values: [USERSStruct, STATUSStruct, RIDEDETAILSStruct, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllRides",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRide",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRideCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVehicle", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVehicle",
    values: [string, VEHICLEINFOStruct]
  ): string;

  decodeFunctionResult(functionFragment: "addVehicle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelRide", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "completeRide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmRide",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllRides",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRide", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRideCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVehicle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVehicle",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Ride extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RideInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelRide(
      _rideId: BigNumberish,
      _wasCancelledBy: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    completeRide(
      _rideId: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    confirmRide(
      _user: USERSStruct,
      _status: STATUSStruct,
      _details: RIDEDETAILSStruct,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllRides(
      rideIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[RIDEStructOutput[]]>;

    getRide(
      _rideId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[RIDEStructOutput]>;

    getRideCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVehicle(
      driver: string,
      overrides?: CallOverrides
    ): Promise<[VEHICLEINFOStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addVehicle(
    driver: string,
    _vehicle: VEHICLEINFOStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelRide(
    _rideId: BigNumberish,
    _wasCancelledBy: BigNumberish,
    _timestamp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  completeRide(
    _rideId: BigNumberish,
    _timestamp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  confirmRide(
    _user: USERSStruct,
    _status: STATUSStruct,
    _details: RIDEDETAILSStruct,
    _timestamp: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllRides(
    rideIds: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<RIDEStructOutput[]>;

  getRide(
    _rideId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<RIDEStructOutput>;

  getRideCount(overrides?: CallOverrides): Promise<BigNumber>;

  getVehicle(
    driver: string,
    overrides?: CallOverrides
  ): Promise<VEHICLEINFOStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateVehicle(
    driver: string,
    _vehicle: VEHICLEINFOStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelRide(
      _rideId: BigNumberish,
      _wasCancelledBy: BigNumberish,
      _timestamp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    completeRide(
      _rideId: BigNumberish,
      _timestamp: string,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmRide(
      _user: USERSStruct,
      _status: STATUSStruct,
      _details: RIDEDETAILSStruct,
      _timestamp: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllRides(
      rideIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<RIDEStructOutput[]>;

    getRide(
      _rideId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<RIDEStructOutput>;

    getRideCount(overrides?: CallOverrides): Promise<BigNumber>;

    getVehicle(
      driver: string,
      overrides?: CallOverrides
    ): Promise<VEHICLEINFOStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelRide(
      _rideId: BigNumberish,
      _wasCancelledBy: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    completeRide(
      _rideId: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    confirmRide(
      _user: USERSStruct,
      _status: STATUSStruct,
      _details: RIDEDETAILSStruct,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllRides(
      rideIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRide(
      _rideId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRideCount(overrides?: CallOverrides): Promise<BigNumber>;

    getVehicle(driver: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelRide(
      _rideId: BigNumberish,
      _wasCancelledBy: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    completeRide(
      _rideId: BigNumberish,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    confirmRide(
      _user: USERSStruct,
      _status: STATUSStruct,
      _details: RIDEDETAILSStruct,
      _timestamp: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllRides(
      rideIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRide(
      _rideId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRideCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVehicle(
      driver: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateVehicle(
      driver: string,
      _vehicle: VEHICLEINFOStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
