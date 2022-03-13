import Product from '@modules/product/models/Product';
import IProduct from '@modules/product/interfaces/Product.interface';

class FindAllByIdsProductService {
    async execute(products: IProduct[]): Promise<IProduct[]> {
        const productsIds = products.map(product => product.codigo);

        return await Product.find({
            codigo: {
                $in: productsIds,
            },
        });
    }
}

export { FindAllByIdsProductService };
