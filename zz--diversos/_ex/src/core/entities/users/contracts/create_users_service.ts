import { Users } from '@/core/entities/users/domain/Users.entity'
import { UsersDTO } from '@/core/entities/users/contracts/create_users_DTO'


export interface ICreateUsersService {

  execute(data: UsersDTO): Promise<Users>
}
