import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { Users } from '../domain/users.entity'

import crypto from 'crypto'

@Resolver()
export class UserResolvers {

  private collectionUser: Users[] = []

  @Query(() => [Users])
  async users() {
    return this.collectionUser
  }

  @Mutation(() => Users)
  async createUser (
    @Arg('nome') nome: string,
    @Arg('idade') idade: number
  ) {
    const user = { id: crypto.randomUUID(), nome: nome, idade: idade }

    this.collectionUser.push(user)
    return user
  }
}