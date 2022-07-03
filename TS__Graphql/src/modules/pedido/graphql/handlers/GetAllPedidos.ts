import { Pedido } from '@src/modules/pedido/_entity/Pedido'
import { getAllPedidoInject } from '@src/modules/pedido/injects/CreatePedidoInject'

export const getAllPedidos = async (): Promise<Pedido[]> => {
  return await getAllPedidoInject().execute()
}
