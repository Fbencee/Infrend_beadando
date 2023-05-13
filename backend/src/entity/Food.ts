import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Orderitem } from "./Orderitem";
import { FoodDTO } from "../../../models";

@Entity()
export class Food implements FoodDTO{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;

    @Column()
    preptime: number;

    @Column()
    price: number;

    @OneToMany(type => Orderitem, orderitem => orderitem.food)
    orderitems: Orderitem[];
}