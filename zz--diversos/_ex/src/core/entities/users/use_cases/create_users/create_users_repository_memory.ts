import { ICreateUsersRepository } from '@/core/entities/users/contracts/create_users_repository'
import { makeId } from '@/core/_generics/factories/make_id';
import { Users } from '../../domain/Users.entity';

export class CreateUsersRepositoryMemory implements ICreateUsersRepository {

  users: Users[] = []

  async findByEmail (email: any): Promise<Users> {
    const userExist = this.users.find(user => user.email === email)
    return userExist
  }

  async save (user: Users): Promise<Users> {
    const id = makeId()
    const userId = { ...user, id}
    await this.users.push(userId)
    return user
  }

  
}
