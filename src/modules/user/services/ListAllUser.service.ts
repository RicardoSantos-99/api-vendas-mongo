import users from '@modules/user/models/User';
import User from '@modules/user/interfaces/User.interface';

class ListAllUserService {
    async execute(): Promise<User[]> {
        return await users.find();
    }
}

export { ListAllUserService };
