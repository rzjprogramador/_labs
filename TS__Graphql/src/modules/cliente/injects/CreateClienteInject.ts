import { ClienteRepositoryInMemory } from '@src/modules/cliente/repo_inmemory/ClienteRepositoryInMemory'
import { CreateClienteService } from '@src/modules/cliente/service/CreateClienteService'

export const createClienteInject = () => {
  const clienteRepository = new ClienteRepositoryInMemory()
  const createClienteService = new CreateClienteService(clienteRepository)
  return createClienteService
}
