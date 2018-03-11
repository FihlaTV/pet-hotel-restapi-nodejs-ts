import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("animal")
export class Pet {

    @Column({name: "idaddress"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "animal_name"})
    name: string;

    @Column({name: "animal_kind"})
    kind: string;

    @Column({name: "age"})
    age: number;

    @Column({name: "notice"})
    notice: string;

    @Column({name: "idowner"})
    ownerId: number;

}