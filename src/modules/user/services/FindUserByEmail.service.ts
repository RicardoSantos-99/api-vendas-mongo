import users from '@modules/user/models/User';
import User from '@modules/user/interfaces/User.interface';

class FindUserByEmailService {
    public async execute(email: string): Promise<User | null> {
        return await users.findOne({ email });
    }
}

export { FindUserByEmailService };