import { Users } from "@/core/entities/users/domain/users.entity";
import { CreateUsersDTO } from "./create-users-dto";

export interface CreateUsersServiceProtocol {
  createUsers(user: CreateUsersDTO): Promise<Users>;

  allUsers(): Users[];
}
