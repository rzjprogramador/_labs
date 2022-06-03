import { makeID } from '../../../src/generics/helpers/makes/makeID'
import { ProdEncomendaRepository, CreateProdEncomenda } from '../../../src/domain/prodEncomenda/contracts/prod_encomenda_repository'
import { ProdEncomenda } from '../../../src/domain/prodEncomenda/entity/ProdEncomenda.entity'

export class ProdEncomendaRepositoryInMemory implements ProdEncomendaRepository {

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
// BANCO INMEMORY PRODENCOMENDA SOMENTE PARA AMBIENTE DE TESTS
// NAO SE COMUNICAR COM O PRISMA 