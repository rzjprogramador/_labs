import { EntregasProtocol } from './entregas.interface'

export interface CidadesProtocol {
  id: string
  nome: string

  entregas: EntregasProtocol
}
