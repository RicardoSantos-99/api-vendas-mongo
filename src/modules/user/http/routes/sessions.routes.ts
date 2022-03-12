import { Router } from "express";
import { SessionsController } from "@modules/user/http/controllers/Session.controller";
import { celebrate, Joi, Segments } from 'celebrate';

const sessionsRouter = Router();

const sessionUserController = new SessionsController();

sessionsRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        codigo: Joi.string().required(),
    }
}), sessionUserController.create);

export { sessionsRouter };