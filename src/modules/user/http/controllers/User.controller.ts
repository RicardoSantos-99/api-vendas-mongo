import { Request,  Response } from "express";
import { CreateUserService } from "../../services/CreateUser.service";
import { ListAllUserService } from "../../services/ListAllUser.service";
import { ShowUserService } from "../../services/ShowUser.service";
import { DeleteUserService } from "../../services/DeleteUser.service";
import { UpdateUserService } from "../../services/UpdateUser.service";

class CreateUserController {
    async create(request: Request, response:Response): Promise<Response> {
        const { nome, email, telefone } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute(nome, email, telefone)

        return response.json(user);
    }
    
    async findUsers(request:Request, response: Response ) {
        const listUser = new ListAllUserService();

        const users =  await listUser.execute();
        
        return response.json(users);
    }
    
    async findUserById(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const showUser = new ShowUserService();

        const user = await showUser.execute(id);

       return response.json(user);
    }
    
    async updateUser (request:Request, response:Response): Promise<Response> {
        const {id} = request.params;
        const user = {...request.body};

        const updateUser = new UpdateUserService();

        await updateUser.execute(id, user);

        return response.json({message: 'Usuário atualizado com sucesso.'});
    }

    async deleteUser (request:Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUser = new DeleteUserService();

        await deleteUser.execute(id);

       return response.json({message: 'Usuário excluído com sucesso.'});
    }
    
}

export {CreateUserController};