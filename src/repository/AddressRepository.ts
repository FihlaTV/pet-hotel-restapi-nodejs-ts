import {Service} from "typedi";
import {getManager} from "typeorm";
import {Address} from "../entity/Address";

@Service()
export class AddressRepository {

    findAll() {
        return getManager().find(Address);
    }

    findOneById(id: number) {
        return getManager().findOneById(Address, id);
    }

    insert(address: Address) {
        return getManager().save(address);
    }

    delete(id: number) {
        return getManager().deleteById(Address, id);
    }

    update(id: number, address: Address) {
        return getManager().updateById(Address, id, address);
    }
}