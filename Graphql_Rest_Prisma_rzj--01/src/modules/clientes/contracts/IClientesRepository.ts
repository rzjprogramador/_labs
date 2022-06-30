import { Cliente } from '@src/models/Cliente'

export interface IClientesRepository {
  create(cliente: Cliente): Promise<Cliente>

  exists(email: any): Promise<boolean>
}

export interface GetAllClientesRepository {
  getAllClientes(): Promise<Cliente[]>
}
