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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Employee = class Employee {
};
__decorate([
    typeorm_1.Column({ name: "idstaff" }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "employee_name" }),
    __metadata("design:type", String)
], Employee.prototype, "employeeName", void 0);
__decorate([
    typeorm_1.Column({ name: "employee_last_name" }),
    __metadata("design:type", String)
], Employee.prototype, "employeeLastName", void 0);
__decorate([
    typeorm_1.Column({ name: "employee_patronymic" }),
    __metadata("design:type", String)
], Employee.prototype, "employeePatronymic", void 0);
__decorate([
    typeorm_1.Column({ name: "date_rec" }),
    __metadata("design:type", String)
], Employee.prototype, "dateRec", void 0);
__decorate([
    typeorm_1.Column({ name: "passport" }),
    __metadata("design:type", String)
], Employee.prototype, "passport", void 0);
__decorate([
    typeorm_1.Column({ name: "phone_num" }),
    __metadata("design:type", String)
], Employee.prototype, "phoneNum", void 0);
__decorate([
    typeorm_1.Column({ name: "email" }),
    __metadata("design:type", String)
], Employee.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: "position" }),
    __metadata("design:type", String)
], Employee.prototype, "position", void 0);
Employee = __decorate([
    typeorm_1.Entity("staff")
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map