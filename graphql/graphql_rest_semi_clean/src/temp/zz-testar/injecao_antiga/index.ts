import { CreateUsersRepositoryMemory } from '@/core/users/repositories/create/create_users_repository_memory';

import { CreateUsersService } from '@/core/users/use_cases/create_users_service'

export default () => {
    const createUsersRepository = new CreateUsersRepositoryMemory()
    const createUsersService = new CreateUsersService(createUsersRepository)

    const createUsersResolver = createUsersService

    return createUsersResolver
}