import { User } from "../User";

export interface IUsersRepository {

    // a entidade User vai ter estes metodos - vamos usar em CreateUseCase

    findByEmail(email: string): Promise<User>

    save(user: User): Promise<void>
}