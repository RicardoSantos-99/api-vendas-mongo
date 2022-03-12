import { Document } from 'mongoose';

interface IProduct {
    _id: string;
    nome: string;
    valor: number;
    quantidade: number;
}

export default interface IOrder extends Document {
    user: string;
    produtos: IProduct[];
    valor: number;
}
