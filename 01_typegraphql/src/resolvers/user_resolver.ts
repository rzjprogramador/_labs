import { Resolver, Query } from 'type-graphql'
import { User } from '../models/user'

@Resolver()
export class UserResolvers {

  private data: User[] = []

  @Query(() => [User])
  async hello() {
    return this.data
  }
}