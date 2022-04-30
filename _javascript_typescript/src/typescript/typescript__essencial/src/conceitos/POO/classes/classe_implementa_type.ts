type PessoaNome = {
    nome: string
    sobrenome: string
}

type NomeCompleto = {
    nomeCompleto: () => string
}



class Pessoa implements PessoaNome, NomeCompleto {
    constructor (public nome: string, public sobrenome: string) {}

    nomeCompleto (): string {
        return this.nome + ' ' + this.sobrenome
    }
}


/* -------------------------------------------  */

/* UTILIZAR  */
const pessoa11 = new Pessoa('Reinaldo', 'Zacharias')
console.log( pessoa11 )


/* -------------------------------------------  */
/* 
LICOES 
Em uma classe podemos implements quantos types desejar
no construtor temos que colocar a visibilida da variavel de entrada (public -- para ser enxergada na instanciacao )

*/
