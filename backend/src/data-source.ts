import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Costumer } from "./entity/Costumer"
import { Food } from "./entity/Food"
import { Order } from "./entity/Order"
import { Orderitem } from "./entity/Orderitem"
import { Oven } from "./entity/Oven"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "pizzarendeles",
    synchronize: true,
    logging: true,
    entities: [User, Costumer, Food, Order, Orderitem, Oven],
    migrations: [],
    subscribers: [],
})
