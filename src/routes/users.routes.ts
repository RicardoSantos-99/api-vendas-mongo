import { Router } from "express";
import { CreateUserController } from "../controllers/User.controller";
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/', celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        telefone: Joi.string().required(),
    }
}), createUserController.create);

usersRouter.get('/', createUserController.findUsers);
usersRouter.get('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required(),
    }
}), createUserController.findUserById);

usersRouter.put('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required(),
    }, [Segments.BODY]: {
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        telefone: Joi.string().required()
    }
}), createUserController.updateUser);

usersRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().required(),
    }
}), createUserController.deleteUser);

export {usersRouter};