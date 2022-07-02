import { createCliente } from '@src/modules/cliente/graphql/handlers/CreateClienteResolvers'

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
