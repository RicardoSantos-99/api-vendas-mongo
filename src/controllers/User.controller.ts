import { Request,  Response } from "express";
import { UserService } from "../services/User.service";
import {ListUserService} from "../services/ListUser.service";

class CreateUserController {
    async handle(request: Request, response:Response) {
        const { nome, email, telefone } = request.body;

        const userService = new UserService();

        const user = await userService.execute(nome, email, telefone)

        return response.json(user);
    }
    
    /********************  BUSCA TODOS OS USUÁRIOS *******************/
    async findUsers(request:Request, response: Response ) {
        const userService = new ListUserService();

        const users =  await userService.execute();
        
        return response.json(users);
    }
    
    /********************  BUSCA USUÁRIO PELO ID *******************/
    async findUserById(request: Request, response: Response) {

        const { id } = request.params;

        const userService = new UserService();

        const user = await userService.findUserById(id);

       return response.json(user);
    }
    

    /********************  ALTERA DADOS DO USUARIO *******************/
    async updateUser (request:Request, response:Response) {
        
        const { nome, email } = request.body;

        const userService = new UserService();

        await userService.updateUser(nome, email).then((result) => {
            return response.status(201).json({
                usuario: result
            });
        })
        .catch((error) => {
            return response.status(500).json({
                message: error.message,
                error
            });
        });
    }


    /********************  DELETA USUARIO *******************/
    async deleteUser (request:Request, response: Response ){

        const { id } = request.params;

        const user = new UserService();

        await user.deleteUser(id);

       return response.json({message: 'Usuário excluído com sucesso.'});
    }
    
}

export {CreateUserController};