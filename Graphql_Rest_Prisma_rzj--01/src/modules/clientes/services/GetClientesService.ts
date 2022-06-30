import { injectable, inject } from 'tsyringe'
import { GetAllClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'

@injectable()
export class GetClientesService {
  constructor(
      @inject('GetClientesPostgresPrisma')
      private getClientesRepository: GetAllClientesRepository,
      ) {}

  async execute() {
    return this.getClientesRepository.getAllClientes()
  }
} //
