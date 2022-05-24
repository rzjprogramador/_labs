import { IUsersRepository } from '@/core/entities/users/repositories/i_users_repository';
import { CreateUsersDTO } from '@/core/entities/users/use_cases/create_use_case/i_create_users_dto';
import { EXIST } from '@/core/_generics/objects/msg'
import { Users } from '@/core/entities/users/domain/Users.entity'


class CreateUseUseCase {

  constructor(
    private readonly usersRepository: IUsersRepository,
  ) {}

  async execute(data: CreateUsersDTO) {
    const usersAlreadExist = await this.usersRepository.findByEmail(data.email)

    if(usersAlreadExist) {
      throw new Error(EXIST.USER)
    }

    const user = new Users(data)
    await this.usersRepository.save(user)
    
  }
}

export { CreateUseUseCase }