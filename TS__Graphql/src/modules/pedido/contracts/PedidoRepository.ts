import { Pedido } from '@src/modules/pedido/_entity/Pedido'
import { Cliente } from '@src/modules/cliente/_entity/Cliente'

export interface PedidoRepository {
  create(input: Pedido): Promise<Pedido>

  getAllPedidos(): Promise<Pedido[]>

  findPedidoByCliente(idCliente: any): Promise<any>
}
