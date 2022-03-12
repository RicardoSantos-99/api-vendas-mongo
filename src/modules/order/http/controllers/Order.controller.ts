import { Request,  Response } from "express";

class OrderController {
    async create(request: Request, response:Response): Promise<Response> {
       
        return response.json({oi: 'oi'});
    }
    
    async findUsers(request:Request, response: Response ) {
        
        return response.json({user: 'oi'});

    }
    
    async findUserById(request: Request, response: Response): Promise<Response> {

       return response.json({user: 'oi'});
    }
    
    async updateUser (request:Request, response:Response): Promise<Response> {
       
        return response.json({message: 'Usuário atualizado com sucesso.'});
    }

    async deleteUser (request:Request, response: Response): Promise<Response> {
       

       return response.json({message: 'Usuário excluído com sucesso.'});
    }
}

export {OrderController};