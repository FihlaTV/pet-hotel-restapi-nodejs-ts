import {Body, Delete, Get, JsonController, Param, Post, Put} from "routing-controllers";
import {Address} from "../entity/Address";
import {Service} from "typedi";
import {AddressRepository} from "../repository/AddressRepository";

@Service()
@JsonController("/addresses")
export class AddressController {

    constructor(private addressRepository: AddressRepository) {
    }

    @Get("/")
    getUsers() {
        return this.addressRepository.findAll();
    }

    @Get("/:id")
    get(@Param("id") id: number) {
        return this.addressRepository.findOneById(id);
    }

    @Post("/")
    save(@Body() address: Address) {
        return this.addressRepository.insert(address);
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.addressRepository.delete(id);
    }

    @Put("/:id")
    update(@Param("id") id: number, @Body() address: Address) {
        return this.addressRepository.update(id, address);
    }

}