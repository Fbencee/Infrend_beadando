// import * as express from 'express';
import express  from "express";
import { CostumerController } from "./controller/costumer.controller";
import { FoodController } from './controller/food.controller';
import { OrderController } from './controller/order.controller';
import { OrderitemController } from './controller/orderitem.controller';
import { OvenController } from './controller/oven.controller';

export function getRouter() {
    const router = express.Router();

    const costumerController = new CostumerController();
    // const foodController = new FoodController();
    // const orderController = new OrderController();
    // const orderitemController = new OrderitemController();
    // const ovenController = new OvenController();

    router.get('/costumers', costumerController.getAll);
    router.get('/costumers/:id', costumerController.getOne);
    router.post('/costumers/', costumerController.create);
    router.put('/costumers/', costumerController.update);
    router.delete('/costumers/:id', costumerController.delete);

    // router.get('/food', foodController.getAll);
    // router.get('/food/:id', foodController.getOne);
    // router.post('/food/', foodController.create);
    // router.put('/food/', foodController.update);
    // router.delete('/food/:id', foodController.delete);

    // router.get('/order', orderController.getAll);
    // router.get('/order/:id', orderController.getOne);
    // router.post('/order/', orderController.create);
    // router.put('/order/', orderController.update);
    // router.delete('/order/:id', orderController.delete);

    // router.get('/orderitem', orderitemController.getAll);
    // router.get('/orderitem/:id', orderitemController.getOne);
    // router.post('/orderitem/', orderitemController.create);
    // router.put('/orderitem/', orderitemController.update);
    // router.delete('/orderitem/:id', orderitemController.delete);

    // router.get('/oven', ovenController.getAll);
    // router.get('/oven/:id', ovenController.getOne);
    // router.post('/oven/', ovenController.create);
    // router.put('/oven/', ovenController.update);
    // router.delete('/oven/:id', ovenController.delete);

    return router;
}