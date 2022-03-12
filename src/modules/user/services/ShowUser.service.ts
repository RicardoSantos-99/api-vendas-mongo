import users from '../models/User';

class ShowUserService {
    async execute(id: string) {
        return await users.findById(id);
    }
}

export { ShowUserService };