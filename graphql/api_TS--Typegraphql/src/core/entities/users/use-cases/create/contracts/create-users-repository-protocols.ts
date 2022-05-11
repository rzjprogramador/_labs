import { Users } from "../../../domain/users.entity";
import { CreateUsersDTO } from "./create-users-dto";

export interface CreateUsersRepositoryProtocol {
  createUsers(user: CreateUsersDTO): Users;

  // allUsers(): Users[];
}
