import { BDUsersRepositoryInMemory } from '@/core/entities/users/repositories/implementations/bd_users_repository_memory'
import { CreateUseUseCase } from '@/core/entities/users/use_cases/create_use_case/implementations/create-users_case'
import { CreateUsersController } from '@/core/entities/users/use_cases/create_use_case/implementations/create_users_controller'


export default () => {
  const dbUsersRepositoryInMemory = new BDUsersRepositoryInMemory()
  const createUsersUseCase = new CreateUseUseCase(dbUsersRepositoryInMemory)

  const createUsersController = new CreateUsersController(createUsersUseCase)
  
  return createUsersController
}
