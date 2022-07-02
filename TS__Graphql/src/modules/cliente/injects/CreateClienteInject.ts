import { ClienteRepositoryInMemory } from '@src/modules/cliente/repo_inmemory/ClienteRepositoryInMemory'
import { CreateClienteService } from '@src/modules/cliente/service/CreateClienteService'
import { GetAllClienteService } from '@src/modules/cliente/service/GetAllClienteService'

// POLO UNICO REPOSITORIO EM USO >> MUDE AQUI
const repositoryObject = {
  use: new ClienteRepositoryInMemory(),
}

// INJECOES:

export const createClienteInject = () => {
  const clienteRepository = repositoryObject.use
  const createClienteService = new CreateClienteService(clienteRepository)
  return createClienteService
}

export const getAllClienteInject = () => {
  const clienteRepository = repositoryObject.use
  const getClientes = new GetAllClienteService(clienteRepository)
  return getClientes
}
