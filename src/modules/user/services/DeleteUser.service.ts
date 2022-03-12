import users from '@modules/user/models/User';

class DeleteUserService{
    async execute(id: string): Promise<void | null> {
        return await users.findByIdAndDelete(id);
    }
}

export {DeleteUserService};