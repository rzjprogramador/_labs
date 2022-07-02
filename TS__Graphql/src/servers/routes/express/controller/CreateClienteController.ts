import { Request, Response } from 'express'

import { createClienteInject } from '@src/modules/cliente/injects/CreateClienteInject'

export class CreateClienteController {
  async handle(req: Request, res: Response) {
    const { nome, email, password, identificador } = req.body

    const cliente = await createClienteInject().execute({ nome, email, password, identificador })
    return res.status(200).json(cliente)
  }
}
