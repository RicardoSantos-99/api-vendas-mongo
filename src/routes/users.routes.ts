import { Router } from "express";
import { CreateUserController } from "../controllers/User.controller";

const usersRouter = Router();

const createUserController = new CreateUserController();

usersRouter.post('/usuario', createUserController.handle);
usersRouter.get('/usuarios', createUserController.findUsers);
usersRouter.get('/usuarios/:id', createUserController.findUserById);
usersRouter.put('/usuario/:id', createUserController.updateUser);
usersRouter.delete('/usuario/:id', createUserController.deleteUser);

export default usersRouter;