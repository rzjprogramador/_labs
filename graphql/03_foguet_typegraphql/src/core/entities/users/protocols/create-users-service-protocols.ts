import { Users } from "../domain/users.entity";
import { UsersDTO } from "./users-dto";

export interface CreateUsersServiceProtocol {
  createUsers(user: UsersDTO): Promise<Users>;

  allUsers(): Users[];
}
