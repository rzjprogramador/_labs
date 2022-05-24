import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { CreateUsersService } from '@src/modules/users/use_cases/create_users/create_users_service'
import { IController } from '@src/core/_generics/contracts/controller'


class CreateUserController implements IController {

async handle(req: Request, res: Response): Promise<Response> {
  // 2 - CHAMAR A CAMADA DE SERVICO
  try {
    const { nome, email, password, indexRef } = req.body

    const createUsersService = container.resolve(CreateUsersService)

    const user = await createUsersService.execute({ nome, email, password, indexRef })
    // console.log(user)

    return res.status(200).json(user)
  }
  catch(error: any) {
    return res.status(400).json({
      error: error.message,
    })
  }
}
}

export { CreateUserController }
// export default new CreateUserController()

