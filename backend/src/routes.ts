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
    const foodController = new FoodController();
    // const orderController = new OrderController();
    // const orderitemController = new OrderitemController();
    // const ovenController = new OvenController();

    router.get('/costumers', costumerController.getAll);
    router.get('/costumers/:id', costumerController.getOne);
    router.post('/costumers/', costumerController.create);
    router.put('/costumers/', costumerController.update);
    router.delete('/costumers/:id', costumerController.delete);

    router.get('/foods', foodController.getAll);
    router.get('/foods/:id', foodController.getOne);
    router.post('/foods/', foodController.create);
    router.put('/foods/', foodController.update);
    router.delete('/foods/:id', foodController.delete);

    // router.get('/orders', orderController.getAll);
    // router.get('/orders/:id', orderController.getOne);
    // router.post('/orders/', orderController.create);
    // router.put('/orders/', orderController.update);
    // router.delete('/orders/:id', orderController.delete);

    // router.get('/orderitems', orderitemController.getAll);
    // router.get('/orderitems/:id', orderitemController.getOne);
    // router.post('/orderitems/', orderitemController.create);
    // router.put('/orderitems/', orderitemController.update);
    // router.delete('/orderitems/:id', orderitemController.delete);

    // router.get('/ovens', ovenController.getAll);
    // router.get('/ovens/:id', ovenController.getOne);
    // router.post('/ovens/', ovenController.create);
    // router.put('/ovens/', ovenController.update);
    // router.delete('/ovens/:id', ovenController.delete);

    return router;
}