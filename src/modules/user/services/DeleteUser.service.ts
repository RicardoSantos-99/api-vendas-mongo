import users from '@modules/user/models/User';

class DeleteUserService {
    async execute(id: string): Promise<void> {
        const user = await users.findById(id);

        if (!user) throw new Error('User não encontrado');

        await user.remove();
    }
}

export { DeleteUserService };
