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
const Address_1 = require("../entity/Address");
let AddressRepository = class AddressRepository {
    findAll() {
        return typeorm_1.getManager().find(Address_1.Address);
    }
    findOneById(id) {
        return typeorm_1.getManager().findOneById(Address_1.Address, id);
    }
    insert(address) {
        return typeorm_1.getManager().save(address);
    }
    delete(id) {
        return typeorm_1.getManager().deleteById(Address_1.Address, id);
    }
    update(id, address) {
        return typeorm_1.getManager().updateById(Address_1.Address, id, address);
    }
};
AddressRepository = __decorate([
    typedi_1.Service()
], AddressRepository);
exports.AddressRepository = AddressRepository;
//# sourceMappingURL=AddressRepository.js.map