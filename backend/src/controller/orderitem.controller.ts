import { AppDataSource } from "../data-source";
import { Orderitem } from "../entity/Orderitem";
import { Controller } from "./base.controller";

export class OrderitemController extends Controller{
    repository = AppDataSource.getRepository(Orderitem);

    getOrderitemsByOrder = async (req, res) => {
        try {
            const id = req.query.id;
            let entities;
                    entities = await this.repository.
                    createQueryBuilder('orderitem')
                    .where('orderitem.order = :order_id', { order_id: id })
                    .getMany();

            res.json(entities);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}