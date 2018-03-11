"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const Employee_1 = require("../entity/Employee");
const EmployeeRepository_1 = require("../repository/EmployeeRepository");
const typedi_1 = require("typedi");
let EmployeeController = class EmployeeController {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    getUsers() {
        return this.employeeRepository.findAll();
    }
    get(id) {
        return this.employeeRepository.findOneById(id);
    }
    save(employee) {
        return this.employeeRepository.insert(employee);
    }
    delete(id) {
        return this.employeeRepository.delete(id);
    }

    update(id, employee) {
        return this.employeeRepository.update(id, employee);
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "getUsers", null);
__decorate([
    routing_controllers_1.Get("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "get", null);
__decorate([
    routing_controllers_1.Post("/"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Employee_1.Employee]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "save", null);
__decorate([
    routing_controllers_1.Delete("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "delete", null);
__decorate([
    routing_controllers_1.Put("/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Employee_1.Employee]),
    __metadata("design:returntype", void 0)
], EmployeeController.prototype, "update", null);
EmployeeController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController("/employees"),
    __metadata("design:paramtypes", [EmployeeRepository_1.EmployeeRepository])
], EmployeeController);
exports.EmployeeController = EmployeeController;
//# sourceMappingURL=EmployeeController.js.map