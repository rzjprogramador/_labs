// BANCO INMEMORY PRODENCOMENDA SOMENTE APRA AMBIENTE DE TESTS
// NAO SE COMUNICAR COM O PRISMA 
import crypto from 'node:crypto'
import { ProdEncomendaRepository, CreateProdEncomenda } from '../../src/modules/prodEncomenda/repositories/prod_encomenda_repository'

import { ProdEncomenda } from '../../src/modules/prodEncomenda/entity/ProdEncomenda.entity'

export class PrismaProdEncomendaRepository implements ProdEncomendaRepository {

  public items : ProdEncomenda[]  = []

  async create(data: CreateProdEncomenda): Promise<void> {
      await this.items.push({
        id: crypto.randomUUID(),
        nome: data.nome,
        preco:data.preco
      })
  }
}