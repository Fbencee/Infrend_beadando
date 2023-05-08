import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Order } from "./Order";
import { Food } from "./Food";
import { Oven } from "./Oven";

@Entity()
export class Orderitem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column(type => Date)
    starttime: Date;

    @Column(type => Date)
    endtime: Date;

    @ManyToOne(type => Order, order => order.orderitems)
    order: Order;

    @ManyToOne(type => Food, food => food.orderitems)
    food: Food;

    @ManyToOne(type => Oven, food => food.orderitems)
    oven: Oven;
}