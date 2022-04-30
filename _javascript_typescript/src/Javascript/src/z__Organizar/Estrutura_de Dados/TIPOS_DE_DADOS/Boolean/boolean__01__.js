/* tipo de dados :: BOOLEAN  */

/* Dupla Negacao esta :: ESTÁ AFIRMANDO :: Para o Js assumir a avaliacao como booleana */

/* Valores Falsy -- falso na comparacao do interpretador   */
console.log( 'Afirmo que 0 é :', !!0 )
console.log( 'Afirmo que NaoÈUmNUmero é :', !!NaN )
console.log( 'Afirmo que String Vazia é :', !!'' )
console.log( 'Afirmo que false é :', !!false )
console.log( 'Afirmo que nulo é :', !!null )
console.log( 'Afirmo que indefinido é :', !!undefined )

/* Se tem algum valor na variavel -- e nao for nenhum valor Falsy >>
     então retorna true e executa o que for verdade   */
let estudante = true
let result = estudante ? 'Sim é Verdade' : 'Não deu falso'
console.log( result )


let nota = 10
if (nota) {  /* Nao preciso explicitar nota == 10 só de colocar a variavel se tiver valor ja retorna true e segue */
    console.log( 'Dez' )
}

/* VERDADEIROS -- SÃO OS NAO FALSY -- OU COM ALGUM VALOR QUE NAO SEJA 0  */
console.log( 'Afirmo que 0 é :', !!0 )
console.log( 'Afirmo que -1 é :', !!-1 )
console.log( 'Afirmo que -1 é :', !!10 )
console.log( 'Afirmo que -1 é :', !!'Reinaldo' )
console.log( 'Afirmo que -1 é :', !!"Programador" )

/* OBJETO E ARRAY VAZIO -- SÃO TRUE -- PQ SÃO INSTANCIAS VALIDAS  */
let pessoa = {}
console.log( 'Afirmo que Objeto Vazio é :', !!{} )
console.log( 'Afirmo que Variavel de valor Objeto Vazio é :', !!pessoa )

let carros = []
console.log( 'Afirmo que Array Vazio é :', !![] )
console.log( 'Afirmo que Variavel de valor Array Vazio é :', !!carros )