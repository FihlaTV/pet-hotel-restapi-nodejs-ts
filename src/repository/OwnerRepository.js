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
const Owner_1 = require("../entity/Owner");
let OwnerRepository = class OwnerRepository {
    findAll() {
        return typeorm_1.getManager().find(Owner_1.Owner);
    }
    findOneById(id) {
        return typeorm_1.getManager().findOneById(Owner_1.Owner, id);
    }
    insert(owner) {
        return typeorm_1.getManager().save(owner);
    }
    delete(id) {
        return typeorm_1.getManager().deleteById(Owner_1.Owner, id);
    }
    update(id, owner) {
        return typeorm_1.getManager().updateById(Owner_1.Owner, id, owner);
    }
};
OwnerRepository = __decorate([
    typedi_1.Service()
], OwnerRepository);
exports.OwnerRepository = OwnerRepository;
//# sourceMappingURL=OwnerRepository.js.map