import { HelloRepositoryPrisma } from '../../repositories/prisma_repository/hello_repository_prisma'
import { ListHello } from '../implementations/list_hello'
// import { CreateHello } from '../implementations/create_hello'


export const listHelloControll = () => {
  const helloRepository = new HelloRepositoryPrisma()
  const listHello = new ListHello(helloRepository)

  return listHello
}