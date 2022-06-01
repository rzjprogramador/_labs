import { Router } from 'express'
import { Request, Response } from 'express'
import createUsersController from '@/core/entities/users/use_cases/create_use_case'


const router = Router()

router.post('/users', (req: Request, res: Response) => {
  return createUsersController().handle(req, res)

})

router.get('/users', (req: Request, res: Response) => {
  return createUsersController().handle(req, res)

})

export { router }