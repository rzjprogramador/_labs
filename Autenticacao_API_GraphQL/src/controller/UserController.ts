import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { hash } from 'bcryptjs'

import { User } from '../entities/User'
import { prisma } from '../external/database/prisma_cliente/prisma_client'

@Resolver(User)
export class UserController {
  @Query(() => [User])
  async users() {
    const users = await prisma.users.findMany({})
    return users
  }

  @Query(() => User)
  async findByEmail(@Arg('email') email: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error('NAO EXISTE')
    }

    return user
  }

  @Mutation(() => User)
  async createUser(
    @Arg('nome') nome: string,
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('identificador') identificador: string,
  ) {
    const hashedPassword = await hash(password, 8)

    const user = prisma.users.create({
      data: { nome, email, password: hashedPassword, identificador },
    })
    return user
  }
}
