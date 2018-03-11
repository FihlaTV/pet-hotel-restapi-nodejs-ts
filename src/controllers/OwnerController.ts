import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {Owner} from "../entity/Owner";
import {Service} from "typedi";
import {OwnerRepository} from "../repository/OwnerRepository";

@Service()
@JsonController("/owners")
export class OwnerController {

    constructor(private ownerRepository: OwnerRepository) {
    }

    @Get("/")
    getUsers() {
        return this.ownerRepository.findAll();
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return this.ownerRepository.findOneById(id);
    }

    @Post("/")
    save(@Body() owner: Owner) {
        return this.ownerRepository.insert(owner);
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.ownerRepository.delete(id);
    }

    @Put("/:id")
    update(@Param("id") id: number, @Body() owner: Owner) {
        return this.ownerRepository.update(id, owner);
    }

}