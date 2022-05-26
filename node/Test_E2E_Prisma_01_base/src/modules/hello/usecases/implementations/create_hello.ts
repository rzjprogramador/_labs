import { HelloRepository } from '../../contracts/repositories_contracts/hello_use_case_repository';

// SERVICO

export interface CreateHelloRequest {
  nome: string
  preco: number
}

export class CreateHello {

  constructor(
    private readonly helloRepository: HelloRepository
  ) {}

  execute({ nome, preco }: CreateHelloRequest) {
    // REGRAS DE NEGOCIO ANTES DE CONCLUIR A ACAO FINAL DO OBJETIVO:

    
    this.helloRepository.create({ nome, preco })
  }

}