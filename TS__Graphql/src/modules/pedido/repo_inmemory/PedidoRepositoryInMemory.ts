import { Pedido } from '@src/modules/pedido/_entity/Pedido'
import { PedidoRepository } from '@src/modules/pedido/contracts/PedidoRepository'

export class PedidoRepositoryInMemory implements PedidoRepository {
  public collectionPedido: Pedido[] = []

  async create(input: Pedido): Promise<Pedido> {
    const pedido = Pedido.create(input)
    await this.collectionPedido.push(pedido)
    return pedido
  }

  async getAllPedidos(): Promise<Pedido[]> {
    return await this.collectionPedido
  }
}
