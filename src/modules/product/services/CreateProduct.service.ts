import mongoose from 'mongoose';
import products from '@modules/product/models/Product';
import IProducts from '@modules/product/interfaces/Product.interface';
import { v4 as uuid } from 'uuid';

class CreateProductService {
    async execute(nome: string, valor: number): Promise<IProducts> {
        if (!nome || !valor) {
            throw new Error('Preencha os campos obrigatórios.');
        }

        const product = new products({
            _id: new mongoose.Types.ObjectId(),
            nome,
            codigo: uuid(),
            valor,
        });

        product.save();

        return product;
    }
}

export { CreateProductService };
