import { makeID } from '../../src/generics_app/helpers/makes/makeID'
// BANCO INMEMORY PRODENCOMENDA SOMENTE PARA AMBIENTE DE TESTS
// NAO SE COMUNICAR COM O PRISMA 
import { ProdEncomendaRepository, CreateProdEncomenda } from '../../src/modules/prodEncomenda/usecases/contracts/prod_encomenda_repository'

import { ProdEncomenda } from '../../src/modules/prodEncomenda/entity/ProdEncomenda.entity'

export class InMemoryPrismaProdEncomendaRepository implements ProdEncomendaRepository {

  public items : ProdEncomenda[]  = []

  async create(data: CreateProdEncomenda): Promise<void> {
      await this.items.push({
        id: makeID(),
        nome: data.nome,
        preco:data.preco
      })
  }

  async list(): Promise<ProdEncomenda[]> {
      return [] // TODO
  }
}