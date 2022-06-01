import { HelloRepository } from '../../contracts/repositories_contracts/hello_use_case_repository'

export class ListHello {
  constructor(
    private readonly listHelloRepository: HelloRepository
  ) {}

  handle() {
    this.listHelloRepository.list()
  }
}