import { AppDataSource } from "../data-source";
import { Oven } from "../entity/Oven";
import { Controller } from "./base.controller";

export class OvenController extends Controller{
    repository = AppDataSource.getRepository(Oven);

    getLowestFinishTime = async (req, res) => {
        try {
            const oven = await this.repository
                .createQueryBuilder('oven')
                .orderBy('oven.finishtime','ASC')
                .limit(1)
                .getOne();
                console.log(oven);
            res.json(oven);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

}