import { ProdEncomendaRepository } from '../../prod_encomenda_repository'
import { CreateProdEncomenda } from '../../prod_encomenda_repository'
import { prisma } from '../../../../../database/prisma'

export class PrismaProdEncomendaRepository implements ProdEncomendaRepository {
  async create(data: CreateProdEncomenda): Promise<void> {
      await prisma.prodEncomenda.create({ data })
  }
}