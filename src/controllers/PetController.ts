import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {Pet} from "../entity/Pet";
import {Service} from "typedi";
import {PetRepository} from "../repository/PetRepository";

@Service()
@JsonController("/pets")
export class PetController {

    constructor(private petRepository: PetRepository) {
    }

    @Get("/")
    getUsers() {
        return this.petRepository.findAll();
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return this.petRepository.findOneById(id);
    }

    @Post("/")
    save(@Body() pet: Pet) {
        return this.petRepository.insert(pet);
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.petRepository.delete(id);
    }

    @Put("/:id")
    update(@Param("id") id: number, @Body() pet: Pet) {
        return this.petRepository.update(id, pet);
    }

}