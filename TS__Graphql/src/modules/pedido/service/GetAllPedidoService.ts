import { PedidoRepository } from '@src/modules/pedido/contracts/PedidoRepository'

export class GetAllPedidoService {
  constructor(private readonly pedidoRepository: PedidoRepository) {}

  async execute() {
    return this.pedidoRepository.getAllPedidos()
  }

  //
}
