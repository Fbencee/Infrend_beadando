import { AppDataSource } from "../data-source";
import { Order } from "../entity/Order";
import { Controller } from "./base.controller";

export class OrderController extends Controller{
    repository = AppDataSource.getRepository(Order)
}