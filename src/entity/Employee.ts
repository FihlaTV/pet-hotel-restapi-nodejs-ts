import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("staff")
export class Employee {

    @Column({name: "idstaff"})
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "employee_name"})
    name: string;

    @Column({name: "employee_last_name"})
    lastName: string;

    @Column({name: "employee_patronymic"})
    patronymic: string;

    @Column({name: "date_rec"})
    dateRec: string;

    @Column({name: "passport"})
    passport: string;

    @Column({name: "phone_num"})
    phoneNum: string;

    @Column({name: "email"})
    email: string;

    @Column({name: "position"})
    position: string;

}