class UserConta {
    nome: string
    idade: number

    constructor (nome: string, idade: number) {

        this.nome = nome
        this.idade = idade

    }

    logDetalhes(): void {
        console.log(`Usuario(a) ${this.nome} tem ${this.idade} de idade `)
    }
}
const rei = new UserConta('Reinaldo', 43)
console.log('O Objeto criado foi : ', rei)

const renata = new UserConta('Renata', 40)
console.log('Outro usuario criado : ',renata)

/* USANDO O METODO DA CLASSE COM O OBJ CRIADO */
/* <objInstancia> . <funcaoDaClasse> */
rei.logDetalhes()
renata.logDetalhes()
