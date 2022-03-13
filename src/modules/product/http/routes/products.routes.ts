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

productsRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required()
    }
}), productController.findProductById);

productsRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required()
    },
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required()
    }
}), productController.updateProduct);

productsRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required()
    }
}), productController.deleteProduct);

export { productsRouter };