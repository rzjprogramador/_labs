import { UsersMemoryRepository } from "./repositories/users-memory-repository"
import { UserResolvers } from "./use-cases/create-user-resolvers"

export default () {
  const userRepository = new UsersMemoryRepository();

  const createUsersResolvers = new UserResolvers(userRepository);

  const controlerCreateUsers = createUsersResolvers;
}


