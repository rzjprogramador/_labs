import { prisma } from '@src/external/database/orm_prisma/_connect_db/prisma_client'
import { GetAllClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'

export class GetClientesPostgresPrisma implements GetAllClientesRepository {
  async getAllClientes() {
    return await prisma.clientes.findMany({})
  }
} //
