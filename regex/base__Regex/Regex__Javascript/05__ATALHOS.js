/*

FONTE :: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions]

# ATALHOS
......................
\w  >> Encontra correspondência de qualquer caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_].

Por exemplo, /\w/ encontra correspondente  'a' em "apple," '5' em "$5.28," e '3' em "3D."

......................



*/

const { alfabeto } = require('./ajuda/fonte2')

// console.log(alfabeto.match(/[\w]/g)) // Atalho >> \w >> Equivalente a [A-Za-z0-9_] ITEMS SINGULARES
// console.log(alfabeto.match(/[\w]+/g)) // Atalho >> \w >> Equivalente a [A-Za-z0-9_] COM + BUSCA CONJUNTO (O + ANTES DO FECHAMENTO)
// console.log(alfabeto.match(/[\W]/g)) // Atalho >> \W >> Equivalente a UM NÃO CARACTERE [A-Za-z0-9_]
// console.log(alfabeto.match(/[\W]+/g)) // Atalho >> \W >> Equivalente a UM NÃO CARACTERE [A-Za-z0-9_]

// console.log(alfabeto.match(/[\d]/g)) // Atalho >> \d >> Equivalente a [0-9] ITEMS SINGULARES
//  console.log(alfabeto.match(/[\d]+/g)) // Atalho >> \d >> Equivalente a [0-9] COM + BUSCA CONJUNTO (O + ANTES DO FECHAMENTO)
// console.log(alfabeto.match(/[\D]/g)) // Atalho >> \D >> Equivalente a NEGAÇÃO DE [0-9] PEGA TUDO MENOS ESTES
// console.log(alfabeto.match(/[\D]+/g)) // Atalho >> \D >> Equivalente a NEGAÇÃO DE [0-9] PEGA TUDO MENOS ESTES

//  \s ENCONTRA TODOS ESPAÇOS ::
console.log(alfabeto.match(/[\s+]+/g)) // ENCONTROU TODOS ESPAÇOS
console.log(alfabeto.match(/[\S+]+/g)) // NEGOU TODOS ESPAÇOS --E SEPAROU EM ITEMS ENTRE ONDE TINHAM ESPAÇOS TROCOU espaço por ","


