import {Container, Service} from "typedi";
import {Unit} from "../model/Unit";
import {createUnitService} from "./config";

export interface ServiceConfiguration {
    server: string,
    port?: number,
    basePath?: string
}

@Service({ factory: createUnitService })
export class UnitService {
  constructor(private config: ServiceConfiguration) {}

  public async createUnit(unit: Unit) {
    await setTimeout(() => {}, 250);
    return {success: true};
  }

  public async getUnit(id: number) {
    await setTimeout(() => {}, 250);
    return {Id: id, Code: "U01", Name: "Unit 01"} as Unit;
  }

  public getConfig() {
    return console.log(JSON.stringify(this.config));
  }
}