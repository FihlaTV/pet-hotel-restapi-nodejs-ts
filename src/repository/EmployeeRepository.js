"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const Employee_1 = require("../entity/Employee");
let EmployeeRepository = class EmployeeRepository {
    findAll() {
        return typeorm_1.getManager().find(Employee_1.Employee);
    }
    findOneById(id) {
        return typeorm_1.getManager().findOneById(Employee_1.Employee, id);
    }
    insert(employee) {
        return typeorm_1.getManager().save(employee);
    }
};
EmployeeRepository = __decorate([
    typedi_1.Service()
], EmployeeRepository);
exports.EmployeeRepository = EmployeeRepository;
//# sourceMappingURL=EmployeeRepository.js.map