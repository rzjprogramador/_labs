import { UsersMemoryRepository } from "./repositories/users-memory-repository";
import { UserResolvers } from "./use-cases/create-user-resolvers";

const userRepository = new UsersMemoryRepository();

const createUsersResolvers = new UserResolvers(userRepository);

export const controlerCreateUsers = createUsersResolvers;
