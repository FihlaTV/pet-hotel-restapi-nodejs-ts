import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("address")
export class Address {

    @Column({name: "idaddress"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "region"})
    region: string;

    @Column({name: "locality"})
    locality: string;

    @Column({name: "street"})
    street: string;

    @Column({name: "house_num"})
    houseNumber: number;

    @Column({name: "apartment_num"})
    apartmentNumber: number;

}