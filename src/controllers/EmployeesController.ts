import {Body, Get, JsonController, Param, Post, Delete} from "routing-controllers";
import {Employee} from "../entity/Employee";
import {EmployeeRepository} from "../repository/EmployeeRepository";
import {Service} from "typedi";

@Service()
@JsonController("/employees")
export class EmployeesController {

    constructor(private employeeRepository: EmployeeRepository) {
    }

    @Get("/")
    getUsers() {
        return this.employeeRepository.findAll();
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return this.employeeRepository.findOneById(id);
    }

    @Post("/")
    save(@Body() employee: Employee) {
        return this.employeeRepository.insert(employee);
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.employeeRepository.delete(id);
    }

}