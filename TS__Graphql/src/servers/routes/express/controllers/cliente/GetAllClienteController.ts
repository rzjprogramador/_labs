import { Request, Response } from 'express'

import { getAllClienteInject } from '@src/modules/cliente/injects/CreateClienteInject'

export class GetAllClienteController {
  async handle(req: Request, res: Response) {
    const clientes = await getAllClienteInject().execute()
    return res.status(200).json(clientes)
  }
}
