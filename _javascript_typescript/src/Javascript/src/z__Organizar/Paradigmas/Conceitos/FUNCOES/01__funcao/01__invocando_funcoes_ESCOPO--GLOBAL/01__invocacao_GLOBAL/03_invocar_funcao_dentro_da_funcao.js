/* 1 - ESCOPO GLOBAL -- INVOCANDO FUNCAO DENTRO DE OUTRA FUNCAO  */

const helloWord = function () {
    return () => 'Hello Word'
}
// console.log( helloWord() )   // [Function (anonymous)] // Não da certo esta invocacao
console.log( helloWord()() )   // Deu certo somente com 2 ()() porque esta invocando uma funcao dentro de outra funcao
