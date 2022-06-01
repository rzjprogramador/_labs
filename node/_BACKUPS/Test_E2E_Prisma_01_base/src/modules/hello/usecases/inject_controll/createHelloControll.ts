import { HelloRepositoryPrisma } from '../../repositories/prisma_repository/hello_repository_prisma'
import { CreateHello } from '../implementations/create_hello'


export const createHelloControll = () => {
  const helloRepository = new HelloRepositoryPrisma()
  const createHello = new CreateHello(helloRepository)

  return createHello
}