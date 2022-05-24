import { Router, Request, Response } from "express"

import { CreateUserController } from '@/modules/users/use_cases/create_users/create_users_controller'
import { ListUsersController } from '@/modules/users/use_cases/list/list_users_controller'

export const usersRouter = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

usersRouter.post("/users", (req: Request, res: Response) => {
 res.send('Ola')
})
