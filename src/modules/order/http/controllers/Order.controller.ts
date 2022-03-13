import { Request, Response } from 'express';
import { CreateOrderService } from '@modules/order/services/CreateOrder.service';
import { ListOrdersService } from '@modules/order/services/ListOrders.service';
import { ListOrdersByUserService } from '@modules/order/services/ListOrdersByUser.service';
class OrderController {
    async create(request: Request, response: Response): Promise<Response> {
        const { userId, products } = request.body;

        const createOrder = new CreateOrderService();

        const order = await createOrder.execute({
            userId,
            products,
        });

        return response.json(order);
    }

    async listAllOrders(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listOrders = new ListOrdersService();

        const orders = await listOrders.execute();

        return response.json(orders);
    }

    async listOrdersByUser(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { userId } = request.params;
        const { dataInicial, dataFinal, codigo } = request.query;

        const listOrdersByUser = new ListOrdersByUserService();

        const orders = await listOrdersByUser.execute({
            userId,
            dataInicial: dataInicial as string,
            dataFinal: dataFinal as string,
            codigo: codigo as string,
        });

        return response.json(orders);
    }
}

export { OrderController };
