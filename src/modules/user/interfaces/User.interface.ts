import { Document } from 'mongoose';

export default interface IUser extends Document {
    nome: string;
    email: string;
    telefone: string;
    codigo: string;
}