import { Router } from "express"

import { CreateUserController } from '@src/modules/users/use_cases/create_users/create_users_controller'
import { ListUsersController } from '@src/modules/users/use_cases/list/list_users_controller'

export const usersRouter = Router();

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

usersRouter.post("/users", createUserController.handle)

usersRouter.get("/users", listUsersController.handle)