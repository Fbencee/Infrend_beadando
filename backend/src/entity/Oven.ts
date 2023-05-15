import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Orderitem } from "./Orderitem";
import { OvenDTO } from "../../../models";

@Entity()
export class Oven implements OvenDTO {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Orderitem, (orderitem) => orderitem.oven)
    orderitems: Orderitem[];

}