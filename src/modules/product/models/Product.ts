import mongoose, { Schema } from 'mongoose';
import logging from '@shared/config/logging';
import IProduct from '@modules/product/interfaces/Product.interface';

const ProductSchema: Schema = new Schema(
    {
        nome: { type: String, required: true },
        codigo: { type: String, required: true },
        valor: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

ProductSchema.post<IProduct>('save', function () {
    logging.info(`Mongo - Checkout the Product we just saved: ${this}`);
});

export default mongoose.model<IProduct>('Products', ProductSchema);
