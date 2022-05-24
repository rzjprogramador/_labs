import { CreateUsersResolvers } from '@/core/users/controller/createUsersResolvers'
import { CreateUsersRepositoryMemory } from '@/core/users/repositories/create/create_users_repository_memory'
import { CreateUsersService } from '@/core/users/use_cases/create_users_service'
import { Controller } from '@/core/_generics/contracts/controller_protocol'

const makeCreateUsersController = (): Controller =>  {
    const repo = new CreateUsersRepositoryMemory()
        const createUserService = new CreateUsersService(repo)
        return new CreateUsersResolvers(createUserService)
}

export { makeCreateUsersController }