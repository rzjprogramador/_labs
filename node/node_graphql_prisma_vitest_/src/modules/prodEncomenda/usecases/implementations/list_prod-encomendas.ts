import { ProdEncomendaRepository } from '../contracts/prod_encomenda_repository'

export class ListProdEncomendas {
  constructor(
    private readonly prodEncomendaRepository: ProdEncomendaRepository
  ) {}

  async execute() {
    return await this.prodEncomendaRepository.list()
  }
}