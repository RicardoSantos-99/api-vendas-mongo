import Product from '@modules/product/models/Product';

class DeleteProductService {
    async execute(id: string): Promise<void> {
        const product = await Product.findById(id);

        if (!product) throw new Error('Product não encontrado');

        await product.remove();
    }
}

export { DeleteProductService };