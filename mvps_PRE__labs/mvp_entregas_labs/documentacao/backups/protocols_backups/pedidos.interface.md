import { AreaCoberturaProtocol } from './area_cobertura.enum'
import { EntregasProtocol } from './entregas.interface'
import { ProdutosProtocol } from './produtos.interface'
import { StatusEntregaProtocol } from './status_entrega.enum'
import { UsersProtocol } from './users.interface'

export interface PedidosProtocol {
  id: string
  nome: string

  preco_base: number
  acrescimo: number
  desconto: number
  preco_final: number

  statusEntrega: StatusEntregaProtocol
  areaCobertura: AreaCoberturaProtocol

  author: UsersProtocol

  produtos: ProdutosProtocol[]

  entregas: EntregasProtocol[]
}
