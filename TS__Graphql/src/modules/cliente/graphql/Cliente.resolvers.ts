import { createCliente } from '@src/modules/cliente/graphql/handlers/CreateClienteResolvers'

const clienteResolvers = {
  Query: {
    helloCliente: () => `Hello Cliente -> 2 --`,
  },

  Mutation: {
    createCliente,
  },

  //
}

export default clienteResolvers

// OBS: NESTA IMPLEMENTACAO DE MERGE AS IMPORTACOES DE RESOLVERS TEM QUE SER DEFAULT
