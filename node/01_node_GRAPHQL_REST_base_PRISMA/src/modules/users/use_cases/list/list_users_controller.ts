import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { IController } from '@src/core/_generics/contracts/controller'
import { ListUsersService } from '@src/modules/users/use_cases/list/list_users_service'



export class ListUsersController implements IController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listUsersService = container.resolve(ListUsersService)
      const all = await listUsersService.execute()
      return res.status(200).json(all)
      
    }
    catch(error: any) {
      return res.status(400).json({
        error: error.message,
      })
    }
  }
}