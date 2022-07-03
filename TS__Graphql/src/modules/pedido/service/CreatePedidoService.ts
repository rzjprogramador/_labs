import { Pedido } from '@src/modules/pedido/_entity/Pedido'
import { PedidoRepository } from '@src/modules/pedido/contracts/PedidoRepository'

export class CreatePedidoService {
  constructor(private readonly pedidoRepository: PedidoRepository) {}

  async execute(input: Pedido) {
    const { quantidade, endereco } = input

    // REGRAS

    //

    const pedido = await this.pedidoRepository.create({ quantidade, endereco })
    return pedido
  }

  //
}

