import { BancoExternoProtocol } from './BancoExternoProtocol'

export class OracleComands implements BancoExternoProtocol {

    insert() {
        console.log('INSERT direto da classe Oracle')
    }

    update() {
        console.log('UPDATE direto da classe Oracle')
    }

    remove() {
        console.log('DELETE direto da classe Oracle')
    }

}