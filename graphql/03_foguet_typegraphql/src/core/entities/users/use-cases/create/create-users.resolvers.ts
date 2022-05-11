import crypto from "crypto";
import { Resolver, Query, Mutation, Arg } from "type-graphql";

import { Users } from "../../domain/users.entity";

import createUserServiceController from "./main";

@Resolver()
export class CreateUserResolvers {
  //
  private dbData: Users[] = [];
  //

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

    this.dbData.push(user); // INSERIR NO DB FAKE

    return createUserServiceController().createUsers(user);
  }

  //

  @Query(() => [Users])
  async allUsers() {
    return this.dbData; // RETORNANDO O BD FAKE
  }

  //
}

/*
  nome: string
  sobrenome: string
  email: string
  password: string
  */
