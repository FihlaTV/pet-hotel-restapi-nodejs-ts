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
const Address_1 = require("../entity/Address");
const typedi_1 = require("typedi");
const AddressRepository_1 = require("../repository/AddressRepository");
let AddressController = class AddressController {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    getUsers() {
        return this.addressRepository.findAll();
    }
    get(id) {
        return this.addressRepository.findOneById(id);
    }
    save(address) {
        return this.addressRepository.insert(address);
    }
    delete(id) {
        return this.addressRepository.delete(id);
    }
    update(id, address) {
        return this.addressRepository.update(id, address);
    }
};
__decorate([
    routing_controllers_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "getUsers", null);
__decorate([
    routing_controllers_1.Get("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "get", null);
__decorate([
    routing_controllers_1.Post("/"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Address_1.Address]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "save", null);
__decorate([
    routing_controllers_1.Delete("/:id"),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "delete", null);
__decorate([
    routing_controllers_1.Put("/:id"),
    __param(0, routing_controllers_1.Param("id")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Address_1.Address]),
    __metadata("design:returntype", void 0)
], AddressController.prototype, "update", null);
AddressController = __decorate([
    typedi_1.Service(),
    routing_controllers_1.JsonController("/addresses"),
    __metadata("design:paramtypes", [AddressRepository_1.AddressRepository])
], AddressController);
exports.AddressController = AddressController;
//# sourceMappingURL=AddressController.js.map