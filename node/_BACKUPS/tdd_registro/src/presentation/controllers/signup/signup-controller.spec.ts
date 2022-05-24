import { SignUpController } from './signup'
import { MissingParamError, InvalidParamError, ServerError } from '@/presentation/error'
import { EmailValidator } from '@/presentation/contracts'
import { AddAccount, AddAccountModel } from '@/domain/usecases'
import { AccountModel } from '@/domain/model'

interface SutTypes {
    sut: SignUpController
    emailValidatorStub: EmailValidator
    addAccountStub: AddAccount
}
/* factory fabricas */

const makeEmailValidator = (): EmailValidator => {
    class EmailValidatorStub implements EmailValidator {
        isValid (email: string): boolean {
            return true
        }
    }
    return new EmailValidatorStub()
}

const makeAddAccount = (): AddAccount => {
    class AddAccountStub implements AddAccount {
        async add (account: AddAccountModel): Promise<AccountModel> {
            const fakeAccount = {
                id: 'valid_id',
                name: 'valid_name',
                email: 'valid_email@email.com',
                password: 'valid_password'
            }
            return new Promise(resolve => resolve(fakeAccount))
        }
    }
    return new AddAccountStub() // retorna nova instancia desta classe
}

const makeSut = (): SutTypes => {
    const emailValidatorStub = makeEmailValidator()
    const addAccountStub = makeAddAccount()
    const sut = new SignUpController(emailValidatorStub, addAccountStub)
    return {
        sut,
        emailValidatorStub,
        addAccountStub
    }
}

describe('Signup Controller', () => {
    it(`deve retornar statusCode 400 e aviso de falta de parametro,se nao enviar o nome no provedor`, async () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                email: 'any_email@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('name'))
    })

    it(`deve retornar statusCode 400 e aviso de falta de parametro,se nao enviar o "email" no provedor`, async () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('email'))
    })

    it(`deve retornar statusCode 400 e aviso de falta de parametro,se nao enviar o "password" no provedor`, async () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('password'))
    })

    it(`deve retornar statusCode 400 e aviso de falta de parametro,se nao enviar o "passwordConfirmation" no provedor`, async () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email',
                password: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
    })

    it(`deve retornar statusCode 400 se password e passwordConfirmation não forem iguais `, async () => {
        const { sut } = makeSut()

        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email',
                password: 'any_password',
                passwordConfirmation: 'invalid_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new InvalidParamError('passwordConfirmation'))
    })

    it(`validacao: deve retornar statusCode 400 se client enviar email invalido`, async () => {
        const { sut, emailValidatorStub } = makeSut()

        // revertendo o retorno do mockStub somente neste test com o espião
        jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)

        const httpRequest = {
            body: { // passar todas as props
                name: 'any_name',
                email: 'invalid_email',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(400)
        expect(httpResponse.body).toEqual(new InvalidParamError('email'))
    })

    it(`excessao: deve executar EmailVAlidator com email correto.
    Should call EmailValidator with correct email
    `, async () => {
        const { sut, emailValidatorStub } = makeSut()

        // revertendo o retorno do mockStub somente neste test com o espião
        const isValidSpy = jest.spyOn(emailValidatorStub, 'isValid')

        const httpRequest = {
            body: { // passar todas as props
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(isValidSpy).toHaveBeenCalledWith('any_email@email.com')
    })

    it(`deve retornar 500 se metodo isValid no EmailValidator retornar uma "excessao".
    Should return 500 if method isValid in EmailValidator return throws.
    `, async () => {
        const { sut, emailValidatorStub } = makeSut()
        jest.spyOn(emailValidatorStub, 'isValid').mockImplementationOnce(() => {
            throw new Error()
        })

        const httpRequest = {
            body: { // passar todas as props
                name: 'any_name',
                email: 'any_email',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })

    it(`deve executar AddAccount com todos valores corretos : integracao com operario criador de Conta de Usuario  `, async () => {
        const { sut, addAccountStub } = makeSut()

        // revertendo o retorno do mockStub somente neste test com o espião
        const addSpy = jest.spyOn(addAccountStub, 'add')

        const httpRequest = {
            body: { // passar todas as props
                name: 'any_name',
                email: 'any_email@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(addSpy).toHaveBeenCalledWith({
            name: 'any_name',
            email: 'any_email@email.com',
            password: 'any_password'
            // passwordConfirmation nao precisa só foi usado para validacao
        })
    })

    it(`deve retornar statusCode 500 se AddAccount "retornar uma excessao" :: solucao: try/catch na producao.
    Should return 500 if AddAccount return throws.
    `, async () => {
        const { sut, addAccountStub } = makeSut()
        jest.spyOn(addAccountStub, 'add').mockImplementationOnce(() => {
            return new Promise((resolve, reject) => reject(new Error()))
        })

        const httpRequest = {
            body: { // passar todas as props
                name: 'any_name',
                email: 'any_email',
                password: 'any_password',
                passwordConfirmation: 'any_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(500)
        expect(httpResponse.body).toEqual(new ServerError())
    })

    it(`Deve retornar 200 se dados válidos forem fornecidos
    Should return 200 if valid data is provided
    `, async () => {
        const { sut } = makeSut()

        // caso positivo - nao precisa mockar : ja temos o sut reotrnando positivo

        const httpRequest = {
            body: { // passar todas as props
                name: 'valid_name',
                email: 'valid_email@email.com',
                password: 'valid_password',
                passwordConfirmation: 'valid_password'
            }
        }

        const httpResponse = await sut.handle(httpRequest)

        // o que esperar das props do objeto
        expect(httpResponse.statusCode).toBe(200)
        expect(httpResponse.body).toEqual({
            // inserir id porque apra criar user precisa do id
            id: 'valid_id',
            name: 'valid_name',
            email: 'valid_email@email.com',
            password: 'valid_password'
        })
    })
})
