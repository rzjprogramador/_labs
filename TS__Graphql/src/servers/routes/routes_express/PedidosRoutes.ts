import { Router } from 'express'
import { CreatePedidoController } from '@src/servers/rest_express/modules/pedido/controllers/CreatePedidoController'
import { GetAllPedidoController } from '@src/servers/rest_express/modules/pedido/controllers/GetAllPedidoController'

export const pedidosRoutes = Router()

const createPedidoController = new CreatePedidoController()
const getAllPedidoController = new GetAllPedidoController()

pedidosRoutes.post('/create-pedido', createPedidoController.handle)
pedidosRoutes.get('/pedidos', getAllPedidoController.handle)
