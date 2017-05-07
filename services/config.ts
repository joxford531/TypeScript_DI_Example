import {UnitService} from "./UnitService";

export function createUnitService() {
    return new UnitService({server: "localhost:8000"});
}
