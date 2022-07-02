import { Router } from 'express'
import { CreateClienteController } from '@src/servers/routes/express/controller/CreateClienteController'

export const clientesRoutes = Router()

const createClienteController = new CreateClienteController()

clientesRoutes.post('/create-cliente', createClienteController.handle)
