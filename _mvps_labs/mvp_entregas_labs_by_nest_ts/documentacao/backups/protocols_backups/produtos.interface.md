import { PedidosProtocol } from './pedidos.interface'

export interface ProdutosProtocol {
  id: string
  nome: string

  preco_base: number
  acrescimo: number
  desconto: number
  preco_final: number

  createdAt: Date
  updatedAt: Date

  pedidos: PedidosProtocol[]
}
