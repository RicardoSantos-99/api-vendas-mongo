import { Router } from "express";
import { ProductController } from "@modules/product/http/controllers/Product.controller";
import { celebrate, Joi, Segments } from 'celebrate';

const productsRouter = Router();

const productController = new ProductController();

productsRouter.post('/', celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required()
    }
}), productController.create);

productsRouter.get('/', productController.findAllProducts);

export { productsRouter };