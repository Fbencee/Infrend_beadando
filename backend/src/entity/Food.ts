import { Time } from "@angular/common"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Orderitem } from "./Orderitem";

@Entity()
export class Food {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;

    @Column()
    preptime: Number;

    @Column()
    price: number;

    @OneToMany(type => Orderitem, orderitem => orderitem.food)
    orderitems: Orderitem[];
}