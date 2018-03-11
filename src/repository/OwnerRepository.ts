import {Service} from "typedi";
import {getManager} from "typeorm";
import {Owner} from "../entity/Owner";

@Service()
export class OwnerRepository {

    findAll() {
        return getManager().find(Owner);
    }

    findOneById(id: number) {
        return getManager().findOneById(Owner, id);
    }

    insert(owner: Owner) {
        return getManager().save(owner);
    }

    delete(id: number) {
        return getManager().deleteById(Owner, id);
    }

    update(id: number, owner: Owner) {
        return getManager().updateById(Owner, id, owner);
    }
}