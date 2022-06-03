import { db } from '../../../../database/prisma'
import { ProdEncomendaRepository } from '../../contracts/prod_encomenda_repository'
import { CreateProdEncomenda } from '../../contracts/prod_encomenda_repository'
import { ProdEncomenda } from '../../entity/ProdEncomenda.entity'

export class ProdEncomendaRepositoryPostgresPrisma implements ProdEncomendaRepository {
  async create(data: CreateProdEncomenda): Promise<void> {
      await db.prodEncomenda.create({ data })
  }

  async list(): Promise<ProdEncomenda[]> {
    const all = await db.prodEncomenda.findMany()
    return all
  }
}