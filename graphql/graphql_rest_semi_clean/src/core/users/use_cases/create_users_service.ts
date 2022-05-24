/* eslint-disable no-unused-vars */

import { Users } from '@/core/users/domain/Users.entity';
import { ICreateUsersService } from '@/core/users/contracts/create_users_service_protocol'
import { ICreateUsersRepository } from '@/core/users/repositories/create/create_users_repository_protocol';

class CreateUsersService implements ICreateUsersService {
    constructor(
        private readonly createUsersDbRepository: ICreateUsersRepository,
    ) {}

    async createUsers(data: Users): Promise<Users> {
        return await this.createUsersDbRepository.create(data)
    }

    async allUsers(): Promise<Users[]> {
        return await this.createUsersDbRepository.all()
    }

}

export { CreateUsersService }