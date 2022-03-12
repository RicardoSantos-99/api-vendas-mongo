import Product from '@modules/product/models/Product';
import IProduct from '@modules/product/interfaces/Product.interface';

class UpdateProductService {
    async execute(id: string, nome: string, valor: number): Promise<IProduct | null> {
        return await Product.findByIdAndUpdate(id, { nome, valor });
    }
}

export { UpdateProductService };