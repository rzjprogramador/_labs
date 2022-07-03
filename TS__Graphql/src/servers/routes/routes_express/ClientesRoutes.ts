import { Router } from 'express'
import { CreateClienteController } from '@src/servers/rest_express/modules/cliente/controllers/CreateClienteController'
import { GetAllClienteController } from '@src/servers/rest_express/modules/cliente/controllers/GetAllClienteController'

export const clientesRoutes = Router()

const createClienteController = new CreateClienteController()
const getAllClienteController = new GetAllClienteController()

clientesRoutes.post('/create-cliente', createClienteController.handle)
clientesRoutes.get('/clientes', getAllClienteController.handle)
