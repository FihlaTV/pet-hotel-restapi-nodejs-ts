"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const routing_controllers_1 = require("routing-controllers");
const typeorm_2 = require("typeorm");
const typedi_1 = require("typedi");
const routing_controllers_2 = require("routing-controllers");
const EmployeesController_1 = require("./controllers/EmployeesController");
typeorm_1.useContainer(typedi_1.Container);
routing_controllers_1.useContainer(typedi_1.Container);
typeorm_2.useContainer(typedi_1.Container);
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    console.log("Connected. Now run express app");
    routing_controllers_2.createExpressServer({
        cors: {
            credentials: true,
            origin: true
            // options from cors documentation
        },
        controllers: [EmployeesController_1.EmployeesController],
    }).listen(3000, "127.0.0.1");
    console.log("Server is up and running on port 3000. Now send requests to check if everything works.");
})).catch(error => console.log("Error: ", error));
//# sourceMappingURL=index.js.map