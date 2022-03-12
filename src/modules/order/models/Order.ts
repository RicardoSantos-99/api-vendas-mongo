import mongoose, { Schema } from 'mongoose';
import logging from '@shared/config/logging';
import IOrder from '@modules/order/interfaces/Order.interface';
import IProduct from '@modules/product/interfaces/Product.interface';

const OrderSchema: Schema = new Schema(
    {
        user: { type: String, required: true },
        produtos: { type: Array, required: true },
        valor: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

OrderSchema.post<IOrder>('save', function () {
    logging.info('Mongo', 'Checkout the Usuario we just saved: ', this);
});

export default mongoose.model<IOrder>('Orders', OrderSchema);