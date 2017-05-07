"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
routing_controllers_1.useContainer(typedi_1.Container);
const app = routing_controllers_1.createExpressServer({
    controllers: [__dirname + "/controllers/*.js"]
});
app.listen(3000);
console.log("Express Server running on port 3000");

//# sourceMappingURL=server.js.map
