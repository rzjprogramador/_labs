import { CargoUserProtocol } from './cargo.enum'
import { PedidosProtocol } from './pedidos.interface'

export interface UsersProtocol {
  id: string
  nome: string
  estabelecimento: string
  email: string
  password: string
  createdAt: Date
  ultimoLogin: Date

  cargo: CargoUserProtocol

  pedidos: PedidosProtocol[]
}
