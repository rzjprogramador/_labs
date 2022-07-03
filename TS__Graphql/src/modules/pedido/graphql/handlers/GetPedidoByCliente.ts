import { Pedido } from '@src/modules/pedido/_entity/Pedido'
import { getPedidoByClienteInject } from '@src/modules/pedido/injects/CreatePedidoInject'

export const getPedidoByCliente = async (_: any, { idCliente }: any) => {
  return await getPedidoByClienteInject().execute(idCliente)
}
