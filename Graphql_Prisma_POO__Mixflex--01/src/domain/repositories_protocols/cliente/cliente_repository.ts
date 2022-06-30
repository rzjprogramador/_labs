import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'

export interface IClientesRepository {
  create(cliente: Cliente): Promise<Cliente>

  exists(email: any): Promise<boolean>
}
