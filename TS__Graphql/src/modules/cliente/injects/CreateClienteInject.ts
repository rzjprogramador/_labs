import { CreateClienteService } from '@src/modules/cliente/service/CreateClienteService'
import { GetAllClienteService } from '@src/modules/cliente/service/GetAllClienteService'
import { repositoryObject } from '@src/modules/cliente/injects/_UseClienteRepositories'

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
