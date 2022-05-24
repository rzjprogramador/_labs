import { container } from 'tsyringe'

import { IUsersRepository } from '@src/modules/users/contracts/users_repository'
// import { UsersRepositoryMemory } from '@src/modules/users/repositories/users_repository_memory'
import { UsersRepositoryPrisma } from '@src/modules/users/repositories/users_repository_prisma'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepositoryPrisma
)

// container.registerSingleton<ICreateUsersRepository>(
//   'CreateUsersRepository',
//   CreateUsersRepositoryMemory
// )