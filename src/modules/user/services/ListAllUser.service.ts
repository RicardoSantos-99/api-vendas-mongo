import users from '../models/User';
import User from '../interfaces/User.interface';

class ListAllUserService {
    async execute(): Promise<User[]> {
        return await users.find();
    }
}

export {ListAllUserService};