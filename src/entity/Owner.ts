import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("owner")
export class Owner {

    @Column({name: "idowner"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "owner_name"})
    name: string;

    @Column({name: "owner_last_name"})
    lastName: string;

    @Column({name: "owner_patronymic"})
    patronymic: string;

    @Column({name: "passport"})
    passport: string;

    @Column({name: "phone_num"})
    phoneNumber: string;

    @Column({name: "email"})
    email: string;

    @Column({name: "discount"})
    discount: number;

    @Column({name: "idaddress"})
    addressId: number;
}