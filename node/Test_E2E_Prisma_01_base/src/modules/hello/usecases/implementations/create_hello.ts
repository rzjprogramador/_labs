import { HelloRepository } from '../../contracts/repositories_contracts/hello_use_case_repository';
import { CreateHelloRequest } from '../../contracts/repositories_contracts/create_hello_request'

// SERVICO



export class CreateHello {

  constructor(
    private readonly helloRepository: HelloRepository
  ) {}

  handle({ nome, preco }: CreateHelloRequest) {
    // REGRAS DE NEGOCIO ANTES DE CONCLUIR A ACAO FINAL DO OBJETIVO:

    
    this.helloRepository.create({ nome, preco })
  }

}