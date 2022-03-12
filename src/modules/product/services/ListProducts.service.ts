import Product from '@modules/product/models/Product';
import IProduct from '@modules/product/interfaces/Product.interface';

class ListProductsService {
    async execute(): Promise<IProduct[]> {
        return await Product.find();
    }
}

export { ListProductsService };