import { AppDataSource } from "../data-source";
import { Costumer } from "../entity/Costumer";
import { Controller } from "./base.controller";

export class CostumerController extends Controller{
    repository = AppDataSource.getRepository(Costumer);
}