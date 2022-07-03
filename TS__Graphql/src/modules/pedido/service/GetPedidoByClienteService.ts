import { PedidoRepository } from '@src/modules/pedido/contracts/PedidoRepository'

export class GetPedidoByClienteService {
  constructor(private readonly getPedidoByClienteRepo: PedidoRepository) {}

  async execute(idCliente: any) {
    return this.getPedidoByClienteRepo.findPedidoByCliente(idCliente)
  }

  //
}
