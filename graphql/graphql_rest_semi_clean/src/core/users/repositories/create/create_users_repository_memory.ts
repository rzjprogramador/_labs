import { Users } from '@/core/users/domain/Users.entity';
import { UsersDTO } from '@/core/users/contracts/UsersDTO';
import { ICreateUsersRepository } from '@/core/users/repositories/create/create_users_repository_protocol';

class CreateUsersRepositoryMemory implements ICreateUsersRepository {
    public dbFake: Users[] = []

    async create (data: UsersDTO): Promise<Users>  {
         this.dbFake.push(data)
        return data
    }

    async all (): Promise<Users[]> {
        return this.dbFake
    }
}

export { CreateUsersRepositoryMemory }