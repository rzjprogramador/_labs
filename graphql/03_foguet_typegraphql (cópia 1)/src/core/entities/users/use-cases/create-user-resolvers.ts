import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Users } from '../domain/users.entity'

import crypto from 'crypto'
import { UsersRepositoryProtocol } from '../protocols/users-repository-protocols'

@Resolver()
export class UserResolvers {

  private collectionUser: Users[] = [] // TENTAR DPS INJECAO

  // constructor(
  //   private readonly collectionUser: UsersRepositoryProtocol
  // ) {}

  @Mutation(() => Users)
  async createUser (
    @Arg('nome') nome: string,
    @Arg('idade') idade: number
  ) {
    const user = { id: crypto.randomUUID(), nome: nome, idade: idade }

    this.collectionUser.push(user)
    return user
  }

  @Query(() => [Users])
  async users() {
    return this.collectionUser
  }

}