import { IUsersRepository } from '@/core/entities/users/repositories/i_users_repository';
import { Users } from '@/core/entities/users/domain/Users.entity'

class BDUsersRepositoryInMemory implements IUsersRepository {

  private users: Users[] = []

  async findByEmail(email: string): Promise<Users> {
    const user = this.users.find(users => users.email === email)
    return user
  }

  async save(user: Users): Promise<void> {
    this.users.push(user)
  }

  async allUsers(): Promise<Users[]> {
    return this.users
  }
}

export { BDUsersRepositoryInMemory }