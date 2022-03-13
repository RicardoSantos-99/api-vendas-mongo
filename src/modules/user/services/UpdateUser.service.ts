import users from '@modules/user/models/User';
import IUser from '@modules/user/interfaces/User.interface';

class UpdateUserService {
    async execute(id: string, user: IUser): Promise<IUser | null> {
        const userFound = await users.findById(id);

        if (!userFound) throw new Error('User não encontrado');

        userFound.nome = user.nome;
        userFound.email = user.email;
        userFound.telefone = user.telefone;

        await userFound.save();

        return userFound;
    }
}

export { UpdateUserService };