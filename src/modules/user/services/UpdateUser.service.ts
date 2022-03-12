import users from '@modules/user/models/User';
import IUser from '@modules/user/interfaces/User.interface';

class UpdateUserService {
    async execute(id: string, user: IUser): Promise<IUser | null> {
        return await users.findByIdAndUpdate(id, user);
    }
}

export { UpdateUserService };