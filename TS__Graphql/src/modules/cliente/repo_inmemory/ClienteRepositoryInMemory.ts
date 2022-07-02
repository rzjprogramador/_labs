import { Cliente } from '@src/modules/cliente/_entity/Cliente'
import { ClienteRepository } from '@src/modules/cliente/contracts/ClienteRepository'

export class ClienteRepositoryInMemory implements ClienteRepository {
  private collectionCliente: Cliente[] = []

  async create(input: Cliente): Promise<Cliente> {
    const cliente = Cliente.create(input)
    await this.collectionCliente.push(cliente)
    return cliente
  }

  async getAllClientes(): Promise<Cliente[]> {
    return await this.collectionCliente
  }
}
