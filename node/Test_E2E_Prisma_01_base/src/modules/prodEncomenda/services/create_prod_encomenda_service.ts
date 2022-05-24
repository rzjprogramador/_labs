import { ProdEncomendaRepository } from '../repositories/prod_encomenda_repository'

export interface CreateProdEncomendaRequest {
  nome: string
  preco: number
}

export class CreateProdEncomendaService {
  constructor(
    private readonly prodEncomendaRepository: ProdEncomendaRepository
  ) {}

  async execute({ nome, preco }: CreateProdEncomendaRequest) {
    // VALIDACOES
    // VERIFICAR SE JA EXISTE O QUE ESTA SENDO CRIADO
    
    if(!nome) {
      throw new Error('Nome é obriagtorio')
    }

    await this.prodEncomendaRepository.create({ nome, preco })

  }
}