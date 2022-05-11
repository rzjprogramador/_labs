import { CreateUsersRepositoryMemory } from "./repositories/create-users-memory-repository";
import { CreateUserService } from "./create-users.service";

export default () => {
  const createUsersRepository = new CreateUsersRepositoryMemory();

  const createUserServiceController = new CreateUserService(
    createUsersRepository
  );

  return createUserServiceController;
};
