import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Order } from "./Order";
import { Food } from "./Food";
import { Oven } from "./Oven";
import { OrderitemDTO } from "../../../models";

@Entity()
export class Orderitem implements OrderitemDTO {

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

}