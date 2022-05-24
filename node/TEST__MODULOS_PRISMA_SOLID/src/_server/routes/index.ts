import { Router } from "express"

import { usersRouter } from '@/modules/users/shared_module/routes/users_routes'

export const routes = Router()

// CENTRALIZADOR DE ROTAS :: FAÇA IGUAL ESTA EMBAIXO
//
routes.use('/api', usersRouter)
