/* 
Closures === Fechamento -- Clausura
Fecha o que outras funcoes abriram.
São funcoes que se apropriam do contexto de outras funcoes.
Canibais que se alimentam de outras funcoes.

Funcoes definidas dentro do contexto d euma outra funcao
Possuem acesso as variaveis da funcao Pai
funcoes canguru -- onde a closure é um filhote dentro da Mae --como se fosse um hospedeiro.
Ela se lembra do ambiente onde foi criada
*/

/* Exemplo sem Closure :  
Desafio : formatar Nome para mostar somente o primeiro e ultimo nome
*/
const nomeCompleto2 = 'Reinaldo Zacharias Junior'

const formataNome2 = nome =>  {
    const nomes = nome.split(' ') 
    return nomes[0] + ' '+ nomes[nomes.length - 1]
}
console.log('Sem Closure :: ', formataNome2(nomeCompleto2))


/* --------------------------------------------------------- */


/* Exemplo com Closure */
const nomeCompleto = () => {
    const nome = 'Reinaldo Zacharias Junior'

    const formataNome = () => {
        const nomes = nome.split(' ')
        return nomes[0] + ' '+ nomes[nomes.length - 1]
    }
    return formataNome
}
const minhaClosure = nomeCompleto()
console.log('Com Closure: ', minhaClosure())