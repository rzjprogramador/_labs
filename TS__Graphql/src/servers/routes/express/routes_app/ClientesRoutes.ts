import { Router } from 'express'
import { CreateClienteController } from '@src/servers/routes/express/controllers/cliente/CreateClienteController'
import { GetAllClienteController } from '@src/servers/routes/express/controllers/cliente/GetAllClienteController'

export const clientesRoutes = Router()

const createClienteController = new CreateClienteController()
const getAllClienteController = new GetAllClienteController()

clientesRoutes.post('/create-cliente', createClienteController.handle)
clientesRoutes.get('/clientes', getAllClienteController.handle)
