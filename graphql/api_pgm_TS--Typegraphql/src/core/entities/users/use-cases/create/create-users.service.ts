import crypto from "crypto";

import { Users } from "@/core/entities/users/domain/users.entity";
import { CreateUsersRepositoryProtocol } from "./contracts/create-users-repository-protocols";
import { CreateUsersServiceProtocol } from "./contracts/create-users-service-protocols";
import { CreateUsersDTO } from "./contracts/create-users-dto";

export class CreateUserService implements CreateUsersServiceProtocol {
  constructor(
    private readonly dbUsersRepository: CreateUsersRepositoryProtocol
  ) {}
  allUsers(): Users[] {
    throw new Error("Method not implemented.");
  }

  async createUsers(data: CreateUsersDTO): Promise<Users> {
    const { nome, sobrenome, email, password } = data;

    return this.dbUsersRepository.createUsers({
      id: crypto.randomUUID(),
      nome,
      sobrenome,
      email,
      password,
    });
  }

  //
}
