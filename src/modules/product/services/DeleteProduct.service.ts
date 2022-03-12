import Product from '@modules/product/models/Product';

class DeleteProductService {
    async execute(id: string): Promise<void | null> {
        return await Product.findByIdAndDelete(id);
    }
}

export { DeleteProductService };