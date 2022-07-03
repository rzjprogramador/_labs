import { Request, Response } from 'express'

import { getAllPedidoInject } from '@src/modules/pedido/injects/CreatePedidoInject'

export class GetAllPedidoController {
  async handle(req: Request, res: Response) {
    const pedidos = await getAllPedidoInject().execute()
    return res.status(200).json(pedidos)
  }
}
