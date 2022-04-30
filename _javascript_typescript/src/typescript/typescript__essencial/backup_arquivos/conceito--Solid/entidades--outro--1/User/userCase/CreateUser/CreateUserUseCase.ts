import { User } from '../../User'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
    constructor(
        // Recebe o repositorio e ja instancia na classe por meio desta prop private
        private usersRepository: IUsersRepository,
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        // verificar se user exist , usando os dados do DTO
        const userAlreadyExists = await this.usersRepository.findByEmail(
            data.email,
        )

        if (userAlreadyExists) {
            throw new Error('Usuario ja existe.')
        }
        // se o user nao existe
        const user = new User(data)

        // e salva o user
        await this.usersRepository.save(user)
    }
}
