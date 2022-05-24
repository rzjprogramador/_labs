import { container } from 'tsyringe'

import { IUsersRepository } from '@/modules/users/contracts/users_repository'
// import { UsersRepositoryMemory } from '@/modules/users/repositories/users_repository_memory'
import { UsersRepositoryPrisma } from '@/modules/users/repositories/users_repository_prisma'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepositoryPrisma
)

// container.registerSingleton<ICreateUsersRepository>(
//   'CreateUsersRepository',
//   CreateUsersRepositoryMemory
// )