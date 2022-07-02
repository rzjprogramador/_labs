import { createCliente } from '@src/modules/cliente/graphql/handlers/CreateClienteResolvers'
import { getAllClientes } from '@src/modules/cliente/graphql/handlers/GetAllClientes'

const clienteResolvers = {
  Query: {
    helloCliente: () => `Hello Cliente -> 1 --`,
    getAllClientes,
  },

  Mutation: {
    createCliente,
  },

  //
}

export default clienteResolvers

// OBS: NESTA IMPLEMENTACAO DE MERGE AS IMPORTACOES DE RESOLVERS TEM QUE SER DEFAULT
