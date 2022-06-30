import { createCliente } from './handlers/create_cliente'

export const clienteResolvers = {
  Query: {
    helloCliente: () => `Hello Cliente`,
  },

  Mutation: {
    createCliente,
  },
}

// OBS: IMPORTAR O OBJETO DE RESOLVERS NO CENTRALIZADOR DE RESOLVERS
