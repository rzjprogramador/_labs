import { DbAddAccount } from '@/data/use-case/add-account'
import { Encrypter } from '@/data/contracts'

type SutTypes = {
    sut: DbAddAccount
    encrypterStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
    class EncrypterStub implements Encrypter {
        async encrypt (value: string): Promise<string> {
            return new Promise(resolve => resolve('hashed_password'))
        }
    }
    return new EncrypterStub()
}

const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter()
    const sut = new DbAddAccount(encrypterStub)

    return {
        sut,
        encrypterStub
    }
}

describe('DbAddAccount UseCase', () => {
    it(`deve executar Encrypter corretamente no password
    should call Encrypter with correct password`, async () => {
        const { sut, encrypterStub } = makeSut()

        const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')

        const accountData = {
            name: 'valid_name',
            email: 'valid_email@email.com',
            password: 'valid_password'
        }

        await sut.add(accountData)

        expect(encryptSpy).toHaveBeenCalledWith('valid_password')
    })

    it(`deve retornar excessao para controlador que tem o tratamento de erro desta dependencia se houver excessao`, async () => {
        const { sut, encrypterStub } = makeSut()

        jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))

        const accountData = {
            name: 'valid_name',
            email: 'valid_email@email.com',
            password: 'valid_password'
        }

        const promise = sut.add(accountData)

        await expect(promise).rejects.toThrow()
    })
})
