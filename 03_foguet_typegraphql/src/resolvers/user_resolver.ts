import { Resolver, Query, Mutation, Arg } from 'type-graphql'
import { User } from '../models/user'

import crypto from 'crypto'

@Resolver()
export class UserResolvers {

  private collectionUser: User[] = []

  @Query(() => [User])
  async users() {
    return this.collectionUser
  }

  @Mutation(() => User)
  async createUser (
    @Arg('nome') nome: string,
    @Arg('idade') idade: number
  ) {
    const user = { id: crypto.randomUUID(), nome: nome, idade: idade }

    this.collectionUser.push(user)
    return user
  }
}