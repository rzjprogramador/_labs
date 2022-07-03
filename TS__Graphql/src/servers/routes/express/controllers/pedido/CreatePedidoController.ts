import { Request, Response } from 'express'

import { createPedidoInject } from '@src/modules/pedido/injects/CreatePedidoInject'

export class CreatePedidoController {
  async handle(req: Request, res: Response) {
    const { quantidade, endereco } = req.body

    const pedido = await createPedidoInject().execute({ quantidade, endereco })
    return res.status(200).json(pedido)
  }
}
