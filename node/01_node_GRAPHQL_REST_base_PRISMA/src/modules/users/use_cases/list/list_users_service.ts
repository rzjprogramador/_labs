import { inject, injectable} from 'tsyringe'

import { IServiceList } from '@src/core/_generics/contracts/service_list'
import { Users } from '@src/modules/users/domain/Users.entity'
import { IUsersRepository } from '@src/modules/users/contracts/users_repository'

@injectable()
export class ListUsersService implements IServiceList {

  constructor(
    @inject('UsersRepository')
    private readonly listUserRepository: IUsersRepository
  ) {}

  async execute(): Promise<Users[]> {
      const all = await this.listUserRepository.list()
      return all
  }
}