import { container } from 'tsyringe'

import { GetClientesService } from '@src/modules/clientes/services/GetClientesService'
import { CreateClienteService } from '../services/CreateClienteService'
import { ClientePostgresRepositoryPrisma } from '../repositories/ClientePostgresRepositoryPrisma'

function injectCreateClienteControll() {
  const repoCreate = new ClientePostgresRepositoryPrisma()
  const createClienteService = new CreateClienteService(repoCreate)
  return createClienteService
}

const clientesResolvers = {
  Query: {
    getAllClientes: () => {
      const getClientes = container.resolve(GetClientesService)
      return getClientes
    },
  },

  Mutation: {
    createCliente: (_: any, { nome, email, password, identificador }: any) => {
      const clienteData = injectCreateClienteControll()
      clienteData.execute({ nome, email, password, identificador })
    },
  },
}

export default clientesResolvers
