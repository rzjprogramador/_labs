import { IClientesRepository } from '@src/domain/repositories_protocols/cliente/cliente_repository'
import { IClienteRequest } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'
import { MSG_EXCEPTION } from '@src/globals/message/messages'
import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'

export class CreateClienteService {
  constructor(private clienteRepository: IClientesRepository) {}

  async execute({ nome, email, password, identificador }: IClienteRequest) {
    const clienteExist = await this.clienteRepository.exists(email)
    if (clienteExist) {
      throw new Error(MSG_EXCEPTION.INCORRECT)
    }

    const clienteCreate = Cliente.create({ nome, email, password, identificador })
    const cliente = await this.clienteRepository.create(clienteCreate)
    return cliente
  }
} //
