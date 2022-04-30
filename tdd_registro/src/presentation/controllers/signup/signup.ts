import { HttpRequest, Controller, EmailValidator, HttpResponse } from "@/presentation/contracts"
import { MissingParamError, InvalidParamError } from '@/presentation/error'
import { badRequest, serverError, ok } from '@/presentation/helpers'
import { AddAccount } from "@/domain/usecases"

export class SignUpController implements Controller {
    constructor (
        private readonly emailValidator: EmailValidator,
        private readonly addAccount: AddAccount
    ) { }

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const { name, email, password, passwordConfirmation } = httpRequest.body

            // password e passwordConfirmation nao sao iguais.
            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError('passwordConfirmation'))
            }

            // validar o email
            const isValid = this.emailValidator.isValid(email)
            if (!isValid) {
                return badRequest(new InvalidParamError('email'))
            }
            // ate aqui temos todos os dados recebidos e validados para criar o usuario - proxima etapa: criar o usuario

            // proximo passo : Integracao entre Controller e subClasse AddAConta criar a conta de usuario

            // passando o que foi prometido o subAtributo - com o metodo - que espera um obj com os dados

            const account = await this.addAccount.add({
                name,
                email,
                password
            })
            return ok(account)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
