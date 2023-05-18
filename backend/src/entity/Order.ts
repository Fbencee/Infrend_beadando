import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Costumer } from "./Costumer"
import { Orderitem } from "./Orderitem";
import { OrderDTO } from "../../../models";

@Entity()
export class Order implements OrderDTO{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ordertime: Date;

    @Column()
    totalprice: number;

    @Column()
    comments: string;

    @ManyToOne(type => Costumer, costumer => costumer.orders, { eager: true })
    costumer: Costumer;

    @OneToMany(type => Orderitem, orderitem => orderitem.order, { eager: true })
    orderitems: Orderitem[];
}