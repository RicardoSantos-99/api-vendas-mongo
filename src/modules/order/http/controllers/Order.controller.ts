import { Request,  Response } from "express";
import {CreateOrderService} from "@modules/order/services/CreateOrder.service";
class OrderController {
    async create(request: Request, response: Response): Promise<Response> {
        const { userId, products } = request.body;

        const createOrder = new CreateOrderService();

        const order = await createOrder.execute({
            userId,
            products
        });

        return response.json(order);
    }
   
}

export {OrderController};