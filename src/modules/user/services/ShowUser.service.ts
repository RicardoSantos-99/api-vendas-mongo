import users from '@modules/user/models/User';

class ShowUserService {
    async execute(id: string) {
        return await users.findById(id);
    }
}

export { ShowUserService };