import { Router } from "express";
import { OrderController } from "@modules/order/http/controllers/Order.controller";
import { celebrate, Joi, Segments } from 'celebrate';

const sessionsRouter = Router();

const orderController = new OrderController();

sessionsRouter.post('/', celebrate({
    [Segments.BODY]: {
        
    }
}), orderController.create);

export { sessionsRouter };