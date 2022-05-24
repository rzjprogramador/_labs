import { ICreateUsersService } from '@/core/entities/users/contracts/create_users_service'

import { Request, Response } from 'express'

class CreateUserController {

  constructor(
    private readonly createUsersService: ICreateUsersService
  ) {}

handle(req: Request, res: Response) {
  // 2 - CHAMAR A CAMADA DE SERVICO
  try{
    const { body } = req.body
    const user = this.createUsersService.execute( body )
    return res.json(user)
  }
  catch(error) {
    return res.json({
      error: error.message
    })
  }
}
}

export { CreateUserController }