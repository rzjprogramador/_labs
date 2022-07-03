import { Pedido } from '@src/modules/pedido/_entity/Pedido'

export interface PedidoRepository {
  create(input: Pedido): Promise<Pedido>

  getAllPedidos(): Promise<Pedido[]>
}
