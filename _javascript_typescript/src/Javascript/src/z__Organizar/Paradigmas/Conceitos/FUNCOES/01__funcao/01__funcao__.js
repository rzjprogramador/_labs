/* 
FUNÇAO ::
Função é um Objeto que contem um blocod e codigo executavel.

è como tivesse pego um cartao de memoria com intrucoes dentro
 e leva-lo para ser executadio em qualquer estrutura

 è um bloco isolado : Tudo que pe definido dentro da funcao tipo variaveis, outras funcoes 
 só ficam neste escopo nao pode ser acessado fora

 função é de priemira classe :
 Pode ser atribuida a uma variavel, passada como parametro ou ser retornada de uma outra funcao


TIPOS DE FUNCOES ::
- funcao nomeada   ---  ( é nomeada)
- funcao anonima   ---  (nao tem nome e pode ser passada para uma variavel)
- funcao expressao ---  (é passada para uma variavel mas é nomeada) 

*/

/* PRINCIPAIS DIFERENÇAS ============================  */

/* SE VC INVOCAR UMA FUNCAO NOMEADA ANTES DA SUA DEFINIÇÃO ELA FUNCIONA */
console.log( nomeada(10, 20) )
// console.log( arrow(10, 20) )
// console.log( anonima(10, 20) )
// console.log( expressao(10, 20) )

/* A FUNCTION DECLARATION É CARREGADA ANTES DO CODIGO SER COMPILADO 
POR ISSO FUNCIONA SER INVOCADA ANETS DA SUA INVOCAÇÃO */


/* DEFINIÇÃO DAS FUNÇÕES :: ============================  */

/* FUNCAO DECLARATION -- É DECLARADA NOMEADA  */
function nomeada(a, b) {
    return a = b
}


/* FUNCAO EXPRESSAO --> FUNCAO ANONIMA -- RETORNA EM UMA VAR  
NO CONSOLE NAO MOSTRA O NOME DA FUNCAO
NÃO PODE SER INVOCADA ANTES DA SUA DEFINICAO nem com arrow fucntion da o erro :
Cannot access 'arrow' before initialization == Não é possível acessar a 'seta' antes da inicialização

*/
let anonima = function ( a, b) {
    return a - b
}

/* ESCRITA COM ARROW FUCTION APARTIR DO ES6  */
let arrow = () => {
    return a + b
}

/* ==================================================  */


/* NOMEADA SALVA EM UMA VARIAVEL  -- tambem nao pode ser invocada antes da sua definicao */
let expressao = function expressao( a, b) {
    return a - b
}
// console.log( mult(10, 10) )


