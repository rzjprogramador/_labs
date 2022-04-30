export class Pessoa {
    constructor (
        private primeiroNome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string
    ) { }

    getNome () {
        return this.primeiroNome
    }

    getCpf () {
        // entregar cpf com somente numeros
        return this.cpf.replace(/\D/g, '')
    }

    setCpf (valor: string): void {
        this.cpf = valor
    }
}

const reinaldo = new Pessoa('Reinaldo', 'Zacharias', 44, '111.222.333-44')
// console.log(reinaldo)

// acessando atriuto nome via metodo GET
console.log(reinaldo.getNome())
console.log(reinaldo.getCpf())

// configurando valor atriuto com setterr
reinaldo.setCpf('222.222.2222-22')
console.log(reinaldo)
