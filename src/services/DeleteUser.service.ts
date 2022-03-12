import users from '../models/User';

class DeleteUserService{
    async execute(id: string): Promise<void | null> {
        return await users.findByIdAndDelete(id);
    }
}

export {DeleteUserService};