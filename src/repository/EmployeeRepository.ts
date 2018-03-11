import {Service} from "typedi";
import {getManager} from "typeorm";
import {Employee} from "../entity/Employee";

@Service()
export class EmployeeRepository {

    findAll() {
        return getManager().find(Employee);
    }

    findOneById(id: number) {
        return getManager().findOneById(Employee, id);
    }

    insert(employee: Employee) {
        return getManager().save(employee);
    }

    delete(id: number) {
        return getManager().deleteById(Employee, id);
    }

    update(id: number, employee: Employee) {
        return getManager().updateById(Employee, id, employee);
    }
}