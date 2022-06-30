import { makeID } from '@src/globals/makers/maker_identificator'
import { Cliente } from '@src/models/Cliente'
import { IClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'

export class ClienteRepositoryInMemory implements IClientesRepository {
  private collectionClientes: Cliente[] = []

  async create(cliente: Cliente): Promise<Cliente> {
    Object.assign(cliente, {
      id: makeID(),
    })

    this.collectionClientes.push(cliente)
    return cliente
  }

  async exists(email: any): Promise<boolean> {
    const cliente = await this.collectionClientes.some((c) => c.email === email)
    return cliente
  }
}
