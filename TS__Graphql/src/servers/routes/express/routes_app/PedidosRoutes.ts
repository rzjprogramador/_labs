import { Router } from 'express'
import { CreatePedidoController } from '@src/servers/routes/express/controllers/pedido/CreatePedidoController'
import { GetAllPedidoController } from '@src/servers/routes/express/controllers/pedido/GetAllPedidoController'

export const pedidosRoutes = Router()

const createPedidoController = new CreatePedidoController()
const getAllPedidoController = new GetAllPedidoController()

pedidosRoutes.post('/create-pedido', createPedidoController.handle)
pedidosRoutes.get('/pedidos', getAllPedidoController.handle)
