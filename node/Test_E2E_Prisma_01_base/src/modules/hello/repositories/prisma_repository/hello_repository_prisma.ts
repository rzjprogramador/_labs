import { CreateHello, HelloRepository } from '../../contracts/repositories_contracts/hello_use_case_repository';
import { Hello } from '../../entity/Hello.entity'
import { prisma } from '../../../../database/prisma'


export class HelloRepositoryPrisma implements HelloRepository {
  
  async create (data: CreateHello): Promise<void> {
   await  prisma.hello.create({ data })
  }

  async list (): Promise<Hello[]> {
    // const all = await prisma.hello.findMany()
    // return all
  }
  
}