import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Order } from "./Order"

@Entity()
export class Costumer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column()
    phonenumber: string;

    @OneToMany(type => Order, order => order.costumer)
    orders: Order[];
}