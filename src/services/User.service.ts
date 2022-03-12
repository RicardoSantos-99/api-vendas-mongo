import CryptoJS from 'crypto-js';
import mongoose from 'mongoose';
import users from '../models/User';

class CreateUserService {
    
    /*******CRIA USUÁRIO ************/
    public async execute (nome:string, email:string, telefone:string){
        
        if(!email || !nome || !telefone) {
            throw new Error("Preencha os campos obrigatorios.")
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

    public async generaCode(nome:string,email:string){
         if (this.validacaoEmail(email)){
            return CryptoJS.SHA256(`${nome}-${email}`).toString(CryptoJS.enc.Hex);
         } else{
            return '';
         }  
    }

    public validacaoEmail(email:string) {
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

    /*******ALTERA USUÁRIO ************/
    public async updateUser (nome:string,email:string){
        return true;
    }
}
export {CreateUserService};