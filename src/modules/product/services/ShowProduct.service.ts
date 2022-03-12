import Product from '@modules/product/models/Product';
import IProduct from '@modules/product/interfaces/Product.interface';

class ShowProductService {
    async execute(id: string): Promise<IProduct> {
        const product = await Product.findById(id);

        if (!product) throw new Error('Produto não encontrado.');

        return product;
    }
}

export { ShowProductService };