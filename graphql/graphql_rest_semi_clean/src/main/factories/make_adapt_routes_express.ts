import { Controller } from '@/core/_generics/contracts/controller_protocol'
import { makeCreateUsersController } from '@/main/factories/make_create_users_controller'

import { Request, Response } from 'express'

const makeAdaptRoutesExpress = async (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle(req, res)
        res.status(httpResponse.statusCode).json(httpResponse.data)
    }

}

export { makeAdaptRoutesExpress }

/*
* OBS: TENHO QUE USAR AQUI OS TIPOS DO EXPRESS POR SER UMA ROTA REST EXPRESS
* DEFINIR AQUI AS ROTAS RESTCOM O EXPRESS PARA A ENTIDADE USERS
* OBS: JA TEM O PREFIXO PARA ACESSO DEFINIDO EM routes.ts
*/