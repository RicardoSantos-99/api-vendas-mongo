import users from '@modules/user/models/User';

class ShowUserService {
    async execute(id: string) {
        const user = await users.findById(id);

        if (!user) throw new Error('User não encontrado');

        return user;
    }
}

export { ShowUserService };