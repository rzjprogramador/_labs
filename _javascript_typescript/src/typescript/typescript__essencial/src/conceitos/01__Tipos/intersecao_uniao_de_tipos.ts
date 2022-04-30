/* INTERSEÇÃO >> UNIAO DE TIPOS */

// Obs: ? interrogacao passado na propriedade do tipo o torna opcional quando for usar

/* Preciso de : ContaInfo / PessoaInfo / e elas unidas formar o JogadorInfo */
/* CRIANDO TIPOS*/

type ContaInfo = {
    id: number
    nome: string
    email?: string
}

type PessoaInfo = {
    nickname: string
    nivel: number
}
/* criando tipos definindo os tipos do objeto */

/* Interseção >> Uniao dos tipos apra formar outro tipo */
type JogadorInfo = ContaInfo & PessoaInfo


// == USANDO OS TIPOS CRIADOS ============
/* Utilizando o ContaInfo*/
const conta: ContaInfo = {
    id: 1,
    nome: 'Reinaldo',
}

/* Utilizando o PessoaInfo*/
const pessoa: PessoaInfo = {
    nickname: 'Rzj',
    nivel: 5

}


/* Utilizando a Intersecao Uniao dos Tipos em Um*/
/* Cria um Obj de forma literal sem classe , passando os valores sem construcao de classe */

const jogador: JogadorInfo = {
    id: 2,
    nome: 'Reinaldo',
    nickname: 'RzjNIck',
    nivel: 10
}

/* Mostrando resultado no console */
console.log(jogador)