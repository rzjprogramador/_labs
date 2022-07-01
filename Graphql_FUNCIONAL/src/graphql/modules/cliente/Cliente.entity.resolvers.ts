import { createCliente } from '@src/graphql/modules/cliente/handlers/CreateClienteResolvers'

export const clienteResolvers = {
  Query: {
    helloCliente: () => `Hello Cliente`,
  },

  Mutation: {
    createCliente,
  },

  //
}

// OBS: IMPORTAR O OBJETO DE RESOLVERS NO CENTRALIZADOR DE RESOLVERS
