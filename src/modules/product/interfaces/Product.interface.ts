import { Document } from 'mongoose';

export default interface IProduct extends Document {
    nome: string;
    codigo?: string;
    valor: number;
}
