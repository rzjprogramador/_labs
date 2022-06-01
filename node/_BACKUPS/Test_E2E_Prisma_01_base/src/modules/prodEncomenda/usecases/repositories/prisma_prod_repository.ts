import { prisma } from '../../../../database/prisma'
import { ProdEncomendaRepository } from '../contracts/prod_encomenda_repository'
import { CreateProdEncomenda } from '../contracts/prod_encomenda_repository'
import { ProdEncomenda } from '../../entity/ProdEncomenda.entity'

export class PrismaProdEncomendaRepository implements ProdEncomendaRepository {
  async create(data: CreateProdEncomenda): Promise<void> {
      await prisma.prodEncomenda.create({ data })
  }

  async list(): Promise<ProdEncomenda[]> {
    const all = await prisma.prodEncomenda.findMany()
    return all
  }
}