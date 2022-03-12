import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import users from '@modules/user/models/User';

class CreateUserService {
    public async execute (nome:string, email:string, telefone:string){
        
        if(!email || !nome || !telefone) {
            throw new Error("Preencha os campos obrigatórios.")
        }

        const user = new users({
            _id: new mongoose.Types.ObjectId(),
            nome,
            email,
            telefone,
        })
        
        const code = await this.generaCode(nome,email);
        user.codigo = code
        user.save()

        return user
    }

    private async generaCode(nome:string,email:string) {
        if (!this.validateEmail(email)) return ''
        return CryptoJS.SHA256(`${nome}-${email}`).toString(CryptoJS.enc.Hex);
    }

    private validateEmail(email:string) {
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@")+ 1, email.length);
        
        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true
        }
        else{
            throw new Error("Email Inválido")
        }
    }
}

export {CreateUserService};