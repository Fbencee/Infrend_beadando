import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { UserDTO } from "../../../models";

@Entity()
export class User implements UserDTO{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

}