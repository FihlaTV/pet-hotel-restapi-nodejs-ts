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
let Owner = class Owner {
};
__decorate([
    typeorm_1.Column({ name: "idowner" }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Owner.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: "owner_name" }),
    __metadata("design:type", String)
], Owner.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: "owner_last_name" }),
    __metadata("design:type", String)
], Owner.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ name: "owner_patronymic" }),
    __metadata("design:type", String)
], Owner.prototype, "patronymic", void 0);
__decorate([
    typeorm_1.Column({ name: "passport" }),
    __metadata("design:type", String)
], Owner.prototype, "passport", void 0);
__decorate([
    typeorm_1.Column({ name: "phone_num" }),
    __metadata("design:type", String)
], Owner.prototype, "phoneNumber", void 0);
__decorate([
    typeorm_1.Column({ name: "email" }),
    __metadata("design:type", String)
], Owner.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: "discount" }),
    __metadata("design:type", Number)
], Owner.prototype, "discount", void 0);
__decorate([
    typeorm_1.Column({ name: "idaddress" }),
    __metadata("design:type", Number)
], Owner.prototype, "addressId", void 0);
Owner = __decorate([
    typeorm_1.Entity("owner")
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=Owner.js.map