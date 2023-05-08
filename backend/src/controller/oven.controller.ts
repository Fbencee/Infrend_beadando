import { AppDataSource } from "../data-source";
import { Oven } from "../entity/Oven";
import { Controller } from "./base.controller";

export class OvenController extends Controller{
    repository = AppDataSource.getRepository(Oven)
}