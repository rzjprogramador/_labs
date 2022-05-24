import { CreateUsersService } from '../../../../core/entities/users/use_cases/create_users/create_users_service'
import { CreateUsersRepositoryMemory } from '../use_cases/create_users/create_users_repository_memory'
import { CreateUserController } from '../use_cases/create_users/create_users_controller';


export default () =>  {
  const createUsersRepository = new CreateUsersRepositoryMemory()
  const createUsersService = new CreateUsersService(createUsersRepository)
  const createUsersController = new CreateUserController(createUsersService)

  return createUsersController
}