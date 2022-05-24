import createUsersController  from '../../core/entities/users/main/'

import { Router } from 'express'
import { Request, Response } from 'express'


const router = Router()

// const createUserController = new CreateUserController()

// 1 - CHAMAR O CONTROLADOR QUE VAI SALVAR O USER --NESTE CASO O CONTROLADOR INJETADO
router.post('/users', createUsersController().handle)

router.get('/users', (req: Request, res: Response) => {

})

export { router }