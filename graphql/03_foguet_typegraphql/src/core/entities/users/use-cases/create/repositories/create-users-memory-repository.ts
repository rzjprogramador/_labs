import { Users } from "../../../domain/users.entity";
import { CreateUsersRepositoryProtocol } from "../../../protocols/create-users-repository-protocols";
import { UsersDTO } from "../../../protocols/users-dto";

export class CreateUsersRepositoryMemory
  implements CreateUsersRepositoryProtocol
{
  public userCollection: Users[] = [];

  // constructor(private readonly dbUsersMemory: CreateUsersRepositoryProtocol) {}

  createUsers({ nome, sobrenome, email, password }: UsersDTO) {
    // this.userCollection.push(user);
    const newUser = {
      nome,
      sobrenome,
      email,
      password,
    };

    this.userCollection.push(newUser);
    return newUser;
  }

  allUsers(): Users[] {
    return this.userCollection;
  }
}
