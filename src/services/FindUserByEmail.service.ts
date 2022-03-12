import users from '../models/User';
import User from '../interfaces/User.interface';

class FindUserByEmailService {
    public async execute(email: string): Promise<User | null> {
        return await users.findOne({ email });
    }
}

export { FindUserByEmailService };