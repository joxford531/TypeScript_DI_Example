import * as sequelize from "sequelize";
import {Unit} from "./Unit";

export interface Variable {
  Id?: number;
  Code: string;
  Description: string;
  Type?: VariableType;
  TypeId: number;  
}

export interface VariableType {
  Id?: number;
  Measurement: string;
}

export interface VariableData {
  UnitId: number;
  Unit?: Unit;
  SentTime: Date;
  VariableId: number;
  Variable?: Variable;
  ProcessedTime: Date;  
  Value: string;
}

export interface LiveUnitData {
  UnitId: number;
  Unit?: Unit;
  SentTime: Date;
  VariableId: number;
  Variable?: Variable;
  ProcessedTime: Date;  
  Value: string;
}