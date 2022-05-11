import crypto from "crypto";

import { Users } from "../domain/users.entity";
import { CreateUsersRepositoryProtocol } from "../protocols/create-users-repository-protocols";
import { CreateUsersServiceProtocol } from '../protocols/create-users-service-protocols';
import { UsersDTO } from "../protocols/users-dto";

export class CreateUserService implements CreateUsersServiceProtocol {
  constructor(
    private readonly dbUsersRepository: CreateUsersRepositoryProtocol
  ) {}

  async createUsers({
    nome,
    sobrenome,
    email,
    password,
  }: UsersDTO): Promise<Users> {
    return this.dbUsersRepository.createUsers({
      id: crypto.randomUUID(),
      nome,
      sobrenome,
      email,
      password,
    });
  }

  allUsers(): Users[] {
    return this.dbUsersRepository.allUsers();
  }

  // @Mutation(() => Users)
  // async createUser(@Arg("nome") nome: string, @Arg("idade") idade: number) {
  //   const user = { id: crypto.randomUUID(), nome: nome, idade: idade };

  //   this.collectionUser.push(user);
  //   return user;
  // }

  // @Query(() => [Users])
  // async users() {
  //   return this.collectionUser;
  // }
}
