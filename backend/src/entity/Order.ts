import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Costumer } from "./Costumer"
import { Orderitem } from "./Orderitem";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ordertime: Date;

    @Column()
    totalprice: string;

    @Column()
    comments: string;

    @Column()
    address: string;

    @Column()
    phonenumber: string;

    @ManyToOne(type => Costumer, costumer => costumer.orders)
    costumer: Costumer;

    @OneToMany(type => Orderitem, orderitem => orderitem.order)
    orderitems: Orderitem[];
}