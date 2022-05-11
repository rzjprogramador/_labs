import crypto from "crypto";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Users } from "../domain/users.entity";

import { CreateUsersServiceProtocol } from "../protocols/create-users-service-protocols";

@Resolver()
// const createUserResolvers = createUserResolvers();
export class CreateUserResolvers {
  private collectionUser: Users[] = []; // TENTAR DPS INJECAO
  constructor(private readonly dbUsersService: CreateUsersServiceProtocol) {}

  @Mutation(() => Users)
  createUser(
    @Arg("nome") nome: string,
    @Arg("sobrenome") sobrenome: string,
    @Arg("email") email: string,
    @Arg("password") password: string
  ) {
    const user = {
      id: crypto.randomUUID(),
      nome,
      sobrenome,
      email,
      password,
    };

    const newUser = this.collectionUser.push(user);

    // const newUser = this.collectionUser.createUsers(user);
    return newUser;
  }

  @Query(() => [Users])
  async allUsers() {
    return this.dbUsersService.allUsers();
  }
}

/*
  nome: string
  sobrenome: string
  email: string
  password: string
  */
