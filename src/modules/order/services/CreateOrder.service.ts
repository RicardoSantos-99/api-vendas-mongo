import Order from '@modules/order/models/Order';
import IProduct from '@modules/product/interfaces/Product.interface';
import IOrder from '@modules/order/interfaces/Order.interface';
import { FindAllByIdsProductService } from '@modules/product/services/FindAllByIdsProduct.service';

interface IRequest {
    userId: string;
    products: IProduct[];
}

class CreateOrderService {
    async execute({ userId, products }: IRequest): Promise<IOrder> {
        if (!products.length) throw new Error('Nenhum produto foi selecionado');

        const FindAllByIdsProduct = new FindAllByIdsProductService();

        const productsFound = await FindAllByIdsProduct.execute(products);

        const checkInexistentProducts = products.filter(
            product => !productsFound.includes(product.id),
        );

        if (productsFound.length !== products.length) {
            throw new Error(
                `Produto ${checkInexistentProducts.map(
                    product => product.id,
                )} não encontrado`,
            );
        }

        products.forEach((product, index) => {
            product.valor = product.quantidade * productsFound[index].valor;
        });

        const valor = products.reduce((total, product) => {
            return total + product.valor;
        }, 0);

        return await Order.create({
            user: userId,
            produtos: products,
            valor,
        });
    }
}

export { CreateOrderService };
