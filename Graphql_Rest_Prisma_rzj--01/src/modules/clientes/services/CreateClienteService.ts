import { injectable, inject } from 'tsyringe'

import { IClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'
import { IClienteRequest } from '@src/modules/clientes/contracts/ClienteDto'
import { MSG_EXCEPTION } from '@src/globals/message/messages'
import { Cliente } from '@src/models/Cliente'

@injectable()
export class CreateClienteService {
  constructor(
    @inject('ClientePostgresRepositoryPrisma')
    private clienteRepository: IClientesRepository,
  ) {}

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
