import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IUser from '../interfaces/User.interface';

const UserSchema: Schema = new Schema(
    {
        nome: { type: String, required: true },
        email: { type: String, required: true },
        codigo: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

UserSchema.post<IUser>('save', function () {
    logging.info('Mongo', 'Checkout the Usuario we just saved: ', this);
});

export default mongoose.model<IUser>('Usuarios', UserSchema);