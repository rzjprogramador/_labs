import { inject, injectable} from 'tsyringe'

import { IServiceData } from '@src/core/_generics/contracts/service_data'
import { UsersDTO } from '@src/modules/users/contracts/create_users_DTO'
import { IUsersRepository } from '@src/modules/users/contracts/users_repository'
import { EXIST , OBRIGATORIO } from '@src/core/_generics/objects/msg'


@injectable()
export class CreateUsersService implements IServiceData {

  constructor(
    @inject('UsersRepository')
    private readonly createUsersRepository: IUsersRepository
  ) {}

  execute(data: UsersDTO)  {
    // 3- RECEBE OS DADOS DO SOLICITANTE E CHAMA  O REPOSITORIO

    const { nome, email, password, indexRef } = data

    if(!nome) {
      throw new Error(OBRIGATORIO.CAMPO_REQUERIDO)
    }

    const existUser = this.createUsersRepository.findByEmail(email)
    if(existUser) {
      throw new Error(EXIST.JA_EXISTENTE)
    }

    return this.createUsersRepository.save({ nome, email, password, indexRef })

  }
}
