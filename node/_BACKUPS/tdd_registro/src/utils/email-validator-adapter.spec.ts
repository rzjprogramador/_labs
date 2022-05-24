import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({ // mocar o validator para sempre true
    isEmail (): boolean {
        return true
    }
}))

const makeSut = (): EmailValidatorAdapter => {
    return new EmailValidatorAdapter()
}

describe('Email Validator Adapter', () => {
    it(`Deve retornar false se a lib email validator retornar false
    Should return false if lib email validator return false `, () => {
        const sut = makeSut()

        jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false) // mocar só aqui o metodo sempre false

        const isValid = sut.isValid('invalid_email@email.com')

        expect(isValid).toBe(false)
    })

    it(`Deve retornar true se a lib email validator retornar true
    Should return false if lib email validator return false `, () => {
        const sut = makeSut()
        const isValid = sut.isValid('valid_email@email.com')

        expect(isValid).toBe(true)
    })

    it(`Deve executar validator com email correto
    Should call validator with correct email `, () => {
        const sut = makeSut()

        const isEmailSpy = jest.spyOn(validator, 'isEmail')

        sut.isValid('any_email@email.com')

        expect(isEmailSpy).toHaveBeenCalledWith('any_email@email.com')
    })
})
