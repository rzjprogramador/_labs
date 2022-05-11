import { CreateUsersRepositoryProtocol } from "@/core/entities/users/use-cases/create/contracts/create-users-repository-protocols";
import { CreateUsersDTO } from "@/core/entities/users/use-cases/create/contracts/create-users-dto";

export class CreateUsersRepositoryMemory
  implements CreateUsersRepositoryProtocol
{
  // public userCollection: Users[] = [];

  createUsers(data: CreateUsersDTO) {
    const { nome, sobrenome, email, password } = data;

    const newUser = {
      nome,
      sobrenome,
      email,
      password,
    };

    // this.userCollection.push(newUser);

    return newUser;
  }

  //

  // allUsers(): Users[] {
  //   // return this.userCollection;
  // }

  //
}
