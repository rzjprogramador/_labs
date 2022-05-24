import { Users } from '@src/modules/users/domain/Users.entity'
import { UsersDTO } from '@src/modules/users/contracts/create_users_DTO'


export interface IServiceData {
  execute(data: UsersDTO): Promise<Users | null>
}
