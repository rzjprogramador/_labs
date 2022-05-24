import { Users } from '@src/modules/users/domain/Users.entity'
import { UsersDTO } from '@src/modules/users/contracts/create_users_DTO'


export interface IUsersRepository {

  findByEmail(email: string): Promise<Users>
  save(user: UsersDTO): Promise<Users>
  list(): Promise<Users[]>
  
}
