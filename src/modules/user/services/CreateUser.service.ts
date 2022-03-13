import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import Users from '@modules/user/models/User';

class CreateUserService {
    public async execute(nome: string, email: string, telefone: string) {
        if (!email || !nome || !telefone) {
            throw new Error('Preencha os campos obrigatórios.');
        }

        const user = new Users({
            _id: new mongoose.Types.ObjectId(),
            nome,
            email,
            telefone,
        });

        user.codigo = await this.generaCode(nome, email);
        user.save();

        return user;
    }

    private async generaCode(nome: string, email: string) {
        return !this.validateEmail(email)
            ? ''
            : CryptoJS.SHA256(`${nome}-${email}`).toString(CryptoJS.enc.Hex);
    }

    protected validateEmail(email: string) {
        const usuario = email.substring(0, email.indexOf('@'));
        const dominio = email.substring(email.indexOf('@') + 1, email.length);

        if (
            usuario.length >= 1 &&
            dominio.length >= 3 &&
            usuario.search('@') == -1 &&
            dominio.search('@') == -1 &&
            usuario.search(' ') == -1 &&
            dominio.search(' ') == -1 &&
            dominio.search('.') != -1 &&
            dominio.indexOf('.') >= 1 &&
            dominio.lastIndexOf('.') < dominio.length - 1
        ) {
            return true;
        } else {
            throw new Error('Email Inválido');
        }
    }
}

export { CreateUserService };
