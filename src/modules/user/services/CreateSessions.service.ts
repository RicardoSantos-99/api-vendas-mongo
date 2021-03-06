import users from '@modules/user/models/User';
import IUser from '@modules/user/interfaces/User.interface';

interface IRequest {
    email: string;
    codigo: string;
}

class CreateSessionService {
    async execute({ email, codigo }: IRequest): Promise<IUser> {
        const user = await users.findOne({ email });

        if (!user) throw new Error('Usuário não encontrado');

        if (user.codigo !== codigo) throw new Error('Código inválido');

        return user;
    }
}

export { CreateSessionService };
