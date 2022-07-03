import { GetPedidoByClienteService } from '@src/modules/pedido/service/GetPedidoByClienteService'
import { CreatePedidoService } from '@src/modules/pedido/service/CreatePedidoService'
import { GetAllPedidoService } from '@src/modules/pedido/service/GetAllPedidoService'
import { repositoryObject } from '@src/modules/pedido/injects/_UsePedidoRepositories'

// INJECOES:

export const createPedidoInject = () => {
  const pedidoRepository = repositoryObject.use
  const createPedidoService = new CreatePedidoService(pedidoRepository)
  return createPedidoService
}

export const getAllPedidoInject = () => {
  const pedidoRepository = repositoryObject.use
  const getPedidos = new GetAllPedidoService(pedidoRepository)
  return getPedidos
}

export const getPedidoByClienteInject = () => {
  const pedidoRepository = repositoryObject.use
  const getPedidoByCliente = new GetPedidoByClienteService(pedidoRepository)
  return getPedidoByCliente
}
