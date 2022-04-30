import { PedidosProtocol } from './pedidos.interface'
import { CidadesProtocol } from './cidades.interface'

export interface EntregasProtocol {
  id: string

  quantidade: number

  remetente: string
  destinatario: string
  logradouro: string
  numero: string
  complemento: string
  cep: string
  // cidade : string
  estado: string

  pedidos: PedidosProtocol[]
  cidades?: CidadesProtocol
}
