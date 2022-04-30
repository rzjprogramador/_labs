// console.log('Estou em Lutador')

export type LutadorProtocol = {
    _nome: string
    _nacionalidade: string
    _idade: number
    _altura: number
    _peso: number
    _categoria: string
    _vitorias: number
    _derrotas: number
    _empates: number
}

export class Lutador {
    constructor(
        private lutador: LutadorProtocol ) {}

    get nome() {
        return this.lutador._nome
    }
    set nome(n: string) {
        this.lutador._nome = n
    }

    get nacionalidade() {
        return this.lutador._nacionalidade
    }
    set nacionalidade(n: string) {
        this.lutador._nacionalidade = n
    }

    get idade() {
        return this.lutador._idade
    }
    set idade(i: number) {
        this.lutador._idade = i
    }
}


/* ------------------------------------------- */
/*  No main :: Gerar - Utilizar - Apresentar  */
/* ------------------------------------------- */

/* ------------------------------------------- */
/*  Gerar  */
const lutador1 = new Lutador({
    _nome: 'Lutador1', _nacionalidade: 'Franca0', _idade: 30, _altura: 1.80, _peso: 80, 
    _categoria: '0', _vitorias: 0, _derrotas: 0, _empates: 0
}) 


/* ------------------------------------------- */
/*  utilizar */
lutador1.nome = 'ReinaldoLut1'
lutador1.idade = 33


/* ------------------------------------------- */
/*  Apresentar*/
console.log(lutador1)