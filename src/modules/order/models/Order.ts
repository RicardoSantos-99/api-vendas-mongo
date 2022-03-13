import mongoose, { Schema } from 'mongoose';
import logging from '@shared/config/logging';
import IOrder from '@modules/order/interfaces/Order.interface';

const OrderSchema: Schema = new Schema(
    {
        user: { type: String, required: true },
        produtos: { type: Array, required: true },
        valor: { type: Number, required: true },
    },
    {
        timestamps: true,
    },
);

OrderSchema.post<IOrder>('save', function () {
    logging.info(`Mongo - Checkout the Order we just saved: ${this}`);
});

export default mongoose.model<IOrder>('Orders', OrderSchema);
