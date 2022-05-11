import crypto from "crypto";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Users } from "../../domain/users.entity";

import { CreateUsersServiceProtocol } from "../../protocols/create-users-service-protocols";

import createUserServiceController from "./main";

@Resolver()
export class CreateUserResolvers {
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

    return createUserServiceController().createUsers(user);
  }

  @Query(() => [Users])
  async allUsers() {
    return createUserServiceController().allUsers();
  }
}

/*
  nome: string
  sobrenome: string
  email: string
  password: string
  */
