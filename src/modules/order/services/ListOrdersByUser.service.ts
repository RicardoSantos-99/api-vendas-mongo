import Order from '@modules/order/models/Order';
import { ShowUserService } from '@modules/user/services/ShowUser.service';
import IOrder from '@modules/order/interfaces/Order.interface';

interface IRequest {
    userId: string;
    dataInicial: string;
    dataFinal?: string;
    codigo?: string;
}

interface IFilter {
    user: string;
    createdAt: {
        $gte: Date;
        $lte?: Date;
    };
    produtos?: {
        $elemMatch: {
            codigo: string;
        };
    };
}

class ListOrdersByUserService {
    async execute({
        userId,
        dataInicial,
        dataFinal,
        codigo,
    }: IRequest): Promise<IOrder[]> {
        const showUser = new ShowUserService();

        const user = await showUser.execute(userId);

        if (!user) throw new Error('User not found');

        const filter: IFilter = {
            user: userId,
            createdAt: {
                $gte: new Date(dataInicial),
            },
        };

        if (dataFinal) filter.createdAt.$lte = new Date(dataFinal);
        if (codigo)
            filter.produtos = {
                $elemMatch: {
                    codigo: codigo,
                },
            };

        return await Order.find(filter);
    }
}

export { ListOrdersByUserService };
