import { Document } from 'mongoose';
import IProduct from '@modules/product/interfaces/Product.interface';

export default interface IOrder extends Document {
    user: string;
    produtos: IProduct[];
    valor: number;
}
