import { Users } from "../../../domain/users.entity";
import { CreateUsersDTO } from "./create-users-dto";

export interface CreateUsersServiceProtocol {
  createUsers(user: CreateUsersDTO): Promise<Users>;

  allUsers(): Users[];
}
