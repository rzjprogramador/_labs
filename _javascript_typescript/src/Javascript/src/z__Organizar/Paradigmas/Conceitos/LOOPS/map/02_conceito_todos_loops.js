/* ---------------------------------------------------------
    FOREACH === PARA CADA ITEM FAÇA ALGO

    Só que o forEach nao retorna para uma variavel nada

    - Conceito usar o loop somente para loop -- condicoes/ logica colocar em outra funcao fora e injetar elas no loop
    Obs: com forEach nao consigo retornar para uma variavel o resultado porque ele nao retorna nada
    - Serventia : ???


 Funcao Calback é uma anonima () só com os parenteses --  
que recebe como 1 arg uma funcao tbm anonima que nela recebe um param e faz algo com este param 

FUNCOES ANONIMAS / CALBACK FORA DO LOOP -- COMO TEM QUE SER 

    Crio uma funcao de calback/ anonima que faz a mudanca e injeto ela no array.loop

 --------------------------------------------------------- */

    
/* --------------------------------------------------------- */
    /* ARRAYS */
/* --------------------------------------------------------- */
const redes = ['youtube', 'twitter', 'instagram']
const numeros = [1, 9, 3, 2, 8, 10, 200]

/* --------------------------------------------------------- */

// ----------------------------------------
// Calback tornarMaiuscula ::
const tornarMaiuscula = ((item) => {
    console.log( item.toUpperCase())
})

// ----------------------------------------
// Calback - mostrar somente numeros pares

const buscarNumerosPares = ( (num) => {
    if ( num % 2 == 0 ) {
        console.log(num)
    }
})
// refatorando com filter esta verificacao :: filter() retorna um booleano
// Retorno imediato é a arow fuction :: substitui os parensetes nos args as chaves o return e o if no caso de calback 
// item calback retorno imediato :: item =>
/* filter () :: pega a colecao.filter passa o item que retorna imediato => o item/calback LOGICA/CONDICAO- neste ITEM */
const buscarNumerosParesFilter = numeros.filter(n => n % 2 === 0)


/* --------------------------------------------------------- */
/* --------------------------------------------------------- */
/* --------------------------------------------------------- */


/* USAR FUNCOES CALBACKS COM OS LOOPS :: */

/* FOREACH */

redes.forEach( tornarMaiuscula )

numeros.forEach( buscarNumerosPares )

console.log( buscarNumerosParesFilter ) // Com filter nao preciso do forEach ele ja interou e filtrou todos da minha condicao e salvou em um array -- nao precisei de for e um array vazio pra fazer push

/* MAP */
const redesMap = redes.map( (r) => r.toUpperCase() )
console.log(redesMap)
/* Com map -- nao preciso fazer a funcao fora -- faco o calback dentro dela e atribuo a uma var para usar depois */

/* USANDO FILTER COM MAP */
// Quero do array só os pares e desses pares quero multiplicar por 2
const resultParesMultiplicados = numeros.filter( ( n => n % 2 === 0 )).map( n => n * 2 )
console.log( 'resultParesMultiplicados : ', resultParesMultiplicados )

// SOMENTE LISTAR COM OS LOOPS
redes.forEach( (item) => console.log('SÓ NA LISTAGEM COM FOREACH SEM FUNCAO CONSIGO ADICIONAR FRASE : ', item ))



/* TESTANDO MAP */

// Calculadora :: ------------------------------------------------------
const baseCalculadora = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const calculadoraDe = 5

let resultadoCalculadora = baseCalculadora.map( n => n * calculadoraDe )

console.log( `Calculadora do numero ${calculadoraDe} --Limite multiplicacao: ${baseCalculadora.length} : `, resultadoCalculadora )

// ---------------------------------------------------------------------




/* 
  tutoriais Loop :
  https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=CjwKCAjw3MSHBhB3EiwAxcaEu7dLBSW_jhYqXbYP9AFoX9pFz6CSUIH7m4PX9QjTAUxpr2JOhJLnNBoCRTUQAvD_BwE

*/

/* ---------------------------------------------------------
conceitos : 


    FOREACH ::
    O forEach percorre todos os itens de um array, tal como o loop for normal, isso é porque internamente ele possui um lop for.
    Sempre que você for fazer um loop for, vale mais a pena usar um forEach, pois ele elimina a carga mental de ter que lidar com as variáveis de controle e por consequência pode ajudar a deixar o código mais fácil de ler, levando em conta que essa é uma forma super usada no mundo JavaScript em geral.

    -------

    MAP ::
    o map e o forEach parecem fazer a mesma coisa, porém a difrença vem quando analisamos o retorno do que sai delas a diferença fica clara.
    Enquanto o forEach foi feito para ser uma alternativa ao loop for, o map foi feito para fazemos operação de transformação/alteração nos itens de um array e ao final dessas operações ter uma lista nova com a mesma quantidade de itens da lista base.

    A função map mapeia os elementos de um array para um novo array com o resultado de uma função aplicado a cada elemento.


 --------------------------------------------------------- */