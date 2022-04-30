
/* --------------------------------------------------------- */
    /*  pop () - Remove o ultimo elemento do array e retorna o removido */
/* --------------------------------------------------------- */
const numeros = [1, 3, 8, 9, 20]
const numeros2 = [1, 3, 8, 9, 20]

let lixeiraNumero = numeros.pop()
console.log(lixeiraNumero)
/* --------------------------------------------------------- */


/* --------------------------------------------------------- */
    /* slice () - fatia o array ..tem 2 params : 1º posicao inicial e 2º a posicao final e retorna a fatia  
    obs: Não retorna o ultimo escolhido entao adicione mais um na sua ultima opcao desejada
    */
/* --------------------------------------------------------- */
let fatiado = numeros.slice(2, 4)
console.log(fatiado)

// Voce pode omitir a posicao final - pegando de uma determinada posicao ate o final
const fatiadoAteoFinal = numeros2.slice(3)
console.log(fatiadoAteoFinal)

/* --------------------------------------------------------- */

/* --------------------------------------------------------- */
    /* join () - transforma os separadores por uma string do que vc passar no parametro */
/* --------------------------------------------------------- */
const separadorDiferente = numeros.join('==')
console.log(separadorDiferente)

/* --------------------------------------------------------- */


/* --------------------------------------------------------- */
    /*  push() adiciona ao array -- e -- includes() -- Retorna um boleano -- se houver no array incluso o que vc passar no args. */
/* --------------------------------------------------------- */
let usuario = [
    'Reinaldo', 43, 'RzjProgramador', 2019, 'Brasileiro'
]
usuario.push('SP')

console.log( usuario )
console.log (usuario.includes('Brasileiro'))  // true
console.log (usuario.includes('Americano'))  // false
/* --------------------------------------------------------- */


/* --------------------------------------------------------- */
    /*  indexOf() -- procura se tem no array o que for passado -- retorna "A posicao" se for true ou -1 se for false nao tiver o que foi passado */
    console.log( usuario.indexOf('Russo')) // falso // retorna -1
    console.log( usuario.indexOf('Reinaldo')) // true // retorna "0 que é a posicao do encontrado"
/* --------------------------------------------------------- */


/* --------------------------------------------------------- */


/* --------------------------------------------------------- */
    /* Merge de Arrays -- Juntar Arrays em um novo Array */
/* --------------------------------------------------------- */
let arr1 = [1, 8, 9]
let arr2 = [3, 4, 9]
let arr3 = [300, 444, 99]

// Metodo novo es6 -- Spred .. Espalhar
const arraysMergiados = [ ...arr1, ...arr2, ...arr3 ]
console.log('Mergiados Spred : ', arraysMergiados)


// METODO ANTIGO COM concat()
const arraysMergiadosAntigo = arr1.concat(arr2).concat(arr3)
// console.log(arraysMergiadosAntigo)

/* --------------------------------------------------------- */


/* --------------------------------------------------------- */
    /* Array Destruct */
/* --------------------------------------------------------- */

const usuario2 = ['Reinaldo', 43, 'RzjProgramador']

// Extraindo do objeto os valores com destruct es6 ::

const [ nome, idade, profissao ] = usuario2
console.log(nome, idade, profissao)


// Extraindo do objeto usuario -- por posicao :
var nome2 = usuario[0]
var idade2 = usuario[1]
var profissao2 = usuario[2]
// console.log(nome2, idade2, profissao2)


/* --------------------------------------------------------- */