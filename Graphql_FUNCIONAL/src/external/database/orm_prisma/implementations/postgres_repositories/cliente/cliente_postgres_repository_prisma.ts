import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
import { IClientesRepository } from '@src/domain/repositories_protocols/cliente/cliente_repository'
import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'

export class ClientePostgresRepositoryPrisma implements IClientesRepository {
  async create({ nome, email, password, identificador }: Cliente): Promise<Cliente> {
    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        password,
        identificador,
      },
    })
    return cliente
  }

  async exists(email: any): Promise<boolean> {
    const cliente = await prisma.cliente.findUnique({
      where: email,
    })
    return !!cliente
  }
}
