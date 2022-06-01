import { Request, Response } from 'express'

import { CreateUseUseCase } from '@/core/entities/users/use_cases/create_use_case/implementations/create-users_case'
import { EXIST } from '@/core/_generics/objects/msg'


class CreateUsersController {

  constructor(
    private readonly createUsersUseCase: CreateUseUseCase
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, email, password } = req.body

    try {
      await this.createUsersUseCase.execute({
        nome,
        email,
        password
      })
      return res.status(201).send()
    }
    catch(error) {
      return res.status(400).json({
        message: error.message || EXIST.INESPERADO_ERRO
      })
    }
  }
}

export { CreateUsersController }