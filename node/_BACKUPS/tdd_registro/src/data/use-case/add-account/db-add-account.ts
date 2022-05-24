import { AddAccount, AddAccountModel } from '@/domain/usecases'
// import { AccountModel } from '@/domain/model'
import { Encrypter } from '@/data/contracts'

export class DbAddAccount implements AddAccount {
    constructor (
        private readonly encrypter: Encrypter
    ) { }

    async add (account: AddAccountModel): Promise<any> { // <AccountModel> TODO: retornar AccountModel
        // Nao colocar try catch aqui - se houver excessao ja esta testado para ser tratada no controlador que chama este metodo e via tratar com o ServerError()
        await this.encrypter.encrypt(account.password)
        return new Promise(resolve => resolve(null))
    }
}
