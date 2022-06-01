import { Users } from '@/core/entities/users/domain/Users.entity'


interface IUsersRepository {
  findByEmail(email: string): Promise<Users>

  save(user: Users): Promise<void>

}

export { IUsersRepository }