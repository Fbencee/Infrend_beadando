import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Orderitem } from "./Orderitem";

@Entity()
export class Oven {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Orderitem, orderitem => orderitem.oven)
    orderitems: Orderitem[];
}