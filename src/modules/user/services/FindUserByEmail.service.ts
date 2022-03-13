import users from '@modules/user/models/User';
import User from '@modules/user/interfaces/User.interface';

class FindUserByEmailService {
    public async execute(email: string): Promise<User | null> {
        const user = await users.findOne({ email });

        if (!user) throw new Error('Usuário não encontrado');

        return user;
    }
}

export { FindUserByEmailService };