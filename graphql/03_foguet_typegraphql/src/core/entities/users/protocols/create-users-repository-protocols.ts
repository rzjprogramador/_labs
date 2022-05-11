import { Users } from "../domain/users.entity";
import { UsersDTO } from "./users-dto";

export interface CreateUsersRepositoryProtocol {
  createUsers(user: UsersDTO): Users;

  allUsers(): Users[];
}
