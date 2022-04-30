/* FUNCOES DE FABRICA  */

const fabricarPessoa = (nome: string, sobrenome: string): any => {
    let pessoa: any = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    const nomeCompleto = (): String => {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }
    // anexar a funcao com o obj para levar pra fora da classe  e devolver a prop
    pessoa.nomeCompleto = nomeCompleto

    return pessoa
}

let pessoa1 = fabricarPessoa('Gustavo', 'Eduardo')
console.log( pessoa1.nomeCompleto() )


/*
FACTORY -- funcao de fabrica aprendizado: DENTRO DA FUNCAO ::]

1ª linha : O QUE VAI CRIAR
2ª em diante : O QUE VAI DEVOLVER

- METODO PARA UNIR AS VARIAVEIS

-  anexar a funcao com o obj para levar pra fora da classe  
- e devolver a propriedade

*/