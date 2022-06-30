import { CreateClienteService } from '@src/domain/entities/participante/cliente/service/create_cliente_service'
import { ClientePostgresRepositoryPrisma } from '@src/external/database/orm_prisma/implementations/postgres_repositories/cliente/cliente_postgres_repository_prisma'

export const createClienteInjectControll = () => {
  const clientesRepository = new ClientePostgresRepositoryPrisma()
  const createClienteService = new CreateClienteService(clientesRepository)

  return createClienteService
}
