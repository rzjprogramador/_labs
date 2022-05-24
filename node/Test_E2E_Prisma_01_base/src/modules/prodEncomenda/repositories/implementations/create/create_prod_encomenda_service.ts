import { ProdEncomendaRepository } from '../../prod_encomenda_repository'

export interface CreateProdEncomendaRequest {
  nome: string
  preco: number
}

export class CreateProdEncomenda {
  constructor(
    private readonly prodEncomendaRepository: ProdEncomendaRepository
  ) {}

  async execute({ nome, preco }: CreateProdEncomendaRequest) {
    // VALIDACOES
    // VERIFICAR SE JA EXISTE O QUE ESTA SENDO CRIADO

    if(!nome) {
      throw new Error('Nome é obrigatorio')
    }

    await this.prodEncomendaRepository.create({ nome, preco })

  }
}