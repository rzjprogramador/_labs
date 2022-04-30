export class Pessoa1 {
    static idadePadrao = 0
    static cpfPadrao = '999.999.999-99'

    constructor (
        private primeiroNome: string,
        private sobrenome: string,
        private idade: number,
        private cpf: string
    ) { }

    // ORGANIZANOD AQUI UMA FUNCAO

    static falaOi (): string {
        return `Oi`
    }

    /*
    METODO DE FABRICA STATICO
    CRIANDO UMA PESSOA SEM APSSAR TODAS PROPS - O RESTANTE VEM POR DEFAULT STATICO
    */

    static criarPessoa (primeiroNome: string, sobrenome: string): Pessoa1 {
        return new Pessoa1(primeiroNome, sobrenome, Pessoa1.idadePadrao, Pessoa1.cpfPadrao)
    }

    /*
    USANDO ATRIBUTOS STATICOS NO METODO NORMAL SEM A CLAUSULA STATIC
    */
    metodoNormal (): string {
        return `cpf padrao: ${Pessoa1.cpfPadrao} >> idade padrao:${Pessoa1.idadePadrao}`
    }
}

/* ---------------------- // ---------------------- */
/* USO DA CLASSE SEM OS ESTATICOS */
//
const reinaldo = new Pessoa1('Reinaldo', 'Zacharias', 44, '111.111.111-11')
console.log(reinaldo)

// acessando metodo normal somente pela instancia
console.log(reinaldo.metodoNormal())

/* ---------------------- // ---------------------- */
/* USO METODOS STATICOS DA CLASSE */
//
console.log(Pessoa1.falaOi())

const pessoa2 = Pessoa1.criarPessoa('Joao', 'Eduardo')
console.log(pessoa2)

const pessoa3 = Pessoa1.criarPessoa('Maria', 'de Jesus')
console.log(pessoa3)

// ACESSAR ATRIBUTO STATICO FORA DA CLASSE
console.log(Pessoa1.idadePadrao, Pessoa1.cpfPadrao)
