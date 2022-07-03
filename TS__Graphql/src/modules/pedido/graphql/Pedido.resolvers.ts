import { createPedido } from '@src/modules/pedido/graphql/handlers/CreatePedidoResolvers'
import { getAllPedidos } from '@src/modules/pedido/graphql/handlers/GetAllPedidos'

const pedidoResolvers = {
  Query: {
    helloPedido: () => `Hello Pedido -> 1 --`,
    getAllPedidos,
  },

  Mutation: {
    createPedido,
  },

  //
}

export default pedidoResolvers

// OBS: NESTA IMPLEMENTACAO DE MERGE AS IMPORTACOES DE RESOLVERS TEM QUE SER DEFAULT
