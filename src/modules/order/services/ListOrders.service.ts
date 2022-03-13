import Order from '@modules/order/models/Order';
import IOrder from '@modules/order/interfaces/Order.interface';

class ListOrdersService {
    async execute(): Promise<IOrder[]> {
        return await Order.find();
    }
}

export { ListOrdersService };