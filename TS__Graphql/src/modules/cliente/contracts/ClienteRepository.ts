import { Cliente } from '@src/modules/cliente/_entity/Cliente'

export interface ClienteRepository {
  create(input: Cliente): Promise<Cliente>

  getAllClientes(): Promise<Cliente[]>
}
