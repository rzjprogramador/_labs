import { IUsersRepository } from '@src/modules/users/contracts/users_repository'
import { makeId } from '@src/core/_generics/factories/make_id';
import { Users } from '@src/modules/users/domain/Users.entity';
import { prisma } from '@src/database/client_prisma'

export class UsersRepositoryPrisma implements IUsersRepository {


  async findByEmail (email: string): Promise<Users> {
    const emailFind = await prisma.users.findUnique({
      where: { email: email}
    })
    console.log(emailFind)// TODO ESTA VOLTANDO NULL
    return emailFind
  }

  async save (user: Users): Promise<Users> {
    const { nome, email, password,id, indexRef } = user
    
    const newUser = await prisma.users.create({
      data: {
        nome,
        email,
        password,
        id: makeId(),
        indexRef
      }
    })
    return newUser
  }

  async list(): Promise<Users[]> {
    return await prisma.users.findMany()
  }

  
}
