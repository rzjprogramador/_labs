import { ICreateUsersService } from '@/core/entities/users/contracts/create_users_service'
import { Users } from '@/core/entities/users/domain/Users.entity'
import { UsersDTO } from '@/core/entities/users/contracts/create_users_DTO'
import { ICreateUsersRepository } from '@/core/entities/users/contracts/create_users_repository'
import { EXIST , OBRIGATORIO } from '../../../../../core/_generics/objects/msg'


export class CreateUsersService implements ICreateUsersService {

  constructor(
    private readonly createUsersRepository: ICreateUsersRepository
  ) {}

  execute(data: UsersDTO): Promise<Users>  {
    // 3- RECEBE OS DADOS DO SOLICITANTE E CHAMA  O REPOSITORIO

    if(!data.nome) {
      throw new Error(OBRIGATORIO.CAMPO)
    }

    const existUser = this.createUsersRepository.findByEmail(data.email)
    if(!existUser) {
      throw new Error(EXIST.USER)
    }

    return this.createUsersRepository.save(data)

  }
}
