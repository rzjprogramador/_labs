// import { IUsersRepository } from '@src/modules/users/contracts/users_repository'
// import { makeId } from '@src/core/_generics/factories/make_id';
// import { Users } from '@src/modules/users/domain/Users.entity';

// export class UsersRepositoryMemory implements IUsersRepository {

//   public users: Users[] = []

//   async findByEmail (email: string): Promise<Users> {
//     const userExist = await this.users.find(user => user.email == email)
//     return !!userExist
//   }

//   async save (user: Users): Promise<Users> {
//     const id = makeId()
//     const newUser = { ...user, id}
//     await this.users.push(newUser)
//     return newUser
//   }

//   async list(): Promise<Users[]> {
//     const all = await this.users
//     return all
//   }

  
// }
