import { CreateUsersRepositoryMemory } from "../repositories/create-users-memory-repository";
import { CreateUserResolvers } from "../use-cases/create-users.resolvers";
import { CreateUserService } from "../use-cases/create-users.service";

export default () => {
  const createUsersRepository = new CreateUsersRepositoryMemory();

  const createUserService = new CreateUserService(createUsersRepository);

  const createUserResolvers = new CreateUserResolvers(createUserService);

  return createUserResolvers;
};
