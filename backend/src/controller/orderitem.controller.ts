import { AppDataSource } from "../data-source";
import { Orderitem } from "../entity/Orderitem";
import { Controller } from "./base.controller";

export class OrderitemController extends Controller{
    repository = AppDataSource.getRepository(Orderitem)
}