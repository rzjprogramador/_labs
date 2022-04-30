export class Pessoa2020 {
    constructor (
        private _primeiroNome: string,
        private _sobrenome: string,
        private _idade: number,
        private _cpf: string
    ) { }

    get nome () {
        return this._primeiroNome
    }

    get cpf () {
        return this._cpf.replace(/\D/g, '') // entregar cpf com somente numeros
    }

    set cpf (valor: string) {
        this._cpf = valor
    }
}

const reinaldo = new Pessoa2020('Reinaldo', 'Zacharias', 44, '111.222.333-44')
// console.log(reinaldo)

// acessando atriuto nome via metodo GET
console.log(reinaldo.nome)
console.log(reinaldo.cpf)

// configurando valor atriuto com setterr
reinaldo.cpf = '222.222.2222-22'
console.log(reinaldo)
