import { Router } from "express";
import { OrderController } from "@modules/order/http/controllers/Order.controller";
import { celebrate, Joi, Segments } from 'celebrate';

const ordersRouter = Router();

const orderController = new OrderController();

ordersRouter.post('/', celebrate({
    [Segments.BODY]: {
        userId: Joi.string().required(),
        products: Joi.array().items(Joi.object().keys({
            nome: Joi.string().required(),
            codigo: Joi.string().required(),
            quantidade: Joi.number().required()
        }))
    }
}), orderController.create);

export { ordersRouter };