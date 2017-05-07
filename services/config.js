"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnitService_1 = require("./UnitService");
function createUnitService() {
    return new UnitService_1.UnitService({ server: "localhost:8000" });
}
exports.createUnitService = createUnitService;

//# sourceMappingURL=config.js.map
