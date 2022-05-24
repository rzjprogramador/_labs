import { Users } from '@/modules/users/domain/Users.entity'
import { UsersDTO } from '@/modules/users/contracts/create_users_DTO'


export interface IServiceData {
  execute(data: UsersDTO): Promise<Users | null>
}
