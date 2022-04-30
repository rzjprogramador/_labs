/*
# QUANTIFICADORES
SÃO USADOS PARA ENCONTRAR ALGO:

+ == (obrigatorio) { 1 ou N vezes } [Quantifica (Pega Repetido)o que tiver a sua esquerda]
* == (opcionais) { Quantifica 0 ou N vezes }
? == (opcionais) { Quantifica 0 ou 1 vez }

\ == "Barra Invertida" caractere de escape do que tiver a esquerda - 
        ex: vai escapar (pegar o "ponto" = \. )

{minimo, maximo} [Entre chaves o 1º param é min , o 2º é maximo]
{3,} ==  no minimo ... parametro que nao tem numero é considerado 0 == de 3 a 0
{,4} == no maximo ..é com especificado numero só no 2º param == no maximo 4
{10} == especifico de 10 vezes

*/

const { texto1, lista } = require('./ajuda/fonte2')

const regex3 = /Multipli+cado+/gi

// console.log(texto1.match(regex3))

// --------------------------------

// Pegando por grupos ou a mesma coisa com ?
//const regex31 = /\.(jpg|jpeg)/gi;

// Escapando o "ponto" com barra invertida e pegando jpg com opcional ? quantificador "e" se tiver
const regex32 = /\.jpe?g/gi

// Pegar que vem depois do "ponto" -- no maximo 1 "jpge"
const regex33 = /\.jpe{,1}g/gi

// Pegar que vem depois do "ponto" -- todos Grupos maiusculas e minusculas 
const regex34 = /\.(j|J)(p|P)(e|E)?(g|G)/gi 

// fazendo um for of pra listar o array
/*
for (const listas of lista) {
    const valido = listas.match(regex32)

    if (!valido) continue
    console.log(valido)
}
*/
for (const listas of lista) {
    // const valido = listas.match(regex33)
    const valido = listas.match(regex34)

    console.log(lista, valido)
}
