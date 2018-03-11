import {Service} from "typedi";
import {getManager} from "typeorm";
import {Pet} from "../entity/Pet";

@Service()
export class PetRepository {

    findAll() {
        return getManager().find(Pet);
    }

    findOneById(id: number) {
        return getManager().findOneById(Pet, id);
    }

    insert(pet: Pet) {
        return getManager().save(pet);
    }

    delete(id: number) {
        return getManager().deleteById(Pet, id);
    }

    update(id: number, pet: Pet) {
        return getManager().updateById(Pet, id, pet);
    }
}