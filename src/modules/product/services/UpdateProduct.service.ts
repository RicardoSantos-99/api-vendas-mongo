import Product from '@modules/product/models/Product';
import IProduct from '@modules/product/interfaces/Product.interface';

class UpdateProductService {
    async execute(
        id: string,
        nome: string,
        valor: number,
    ): Promise<IProduct | null> {
        const product = await Product.findById(id);

        if (!product) throw new Error('Product não encontrado');

        product.nome = nome;
        product.valor = valor;

        await product.save();

        return product;
    }
}

export { UpdateProductService };
