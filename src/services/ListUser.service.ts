import users from '../models/User';

class ListUserService {
    async execute() {
        return await users.find();
    }
}

export {ListUserService};