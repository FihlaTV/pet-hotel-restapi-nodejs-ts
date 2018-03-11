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
const Pet_1 = require("../entity/Pet");
let PetRepository = class PetRepository {
    findAll() {
        return typeorm_1.getManager().find(Pet_1.Pet);
    }
    findOneById(id) {
        return typeorm_1.getManager().findOneById(Pet_1.Pet, id);
    }
    insert(pet) {
        return typeorm_1.getManager().save(pet);
    }
    delete(id) {
        return typeorm_1.getManager().deleteById(Pet_1.Pet, id);
    }
    update(id, pet) {
        return typeorm_1.getManager().updateById(Pet_1.Pet, id, pet);
    }
};
PetRepository = __decorate([
    typedi_1.Service()
], PetRepository);
exports.PetRepository = PetRepository;
//# sourceMappingURL=PetRepository.js.map