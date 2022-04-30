
const { texto1 } = require('./ajuda/fonte2')

const regex1 = /(Renata )(hoje sua esposa)/i;
const encontrado1 = regex1.exec(texto1)

/*
FUNCOES match executa de dentro do objeto da expressao regular regex

// funcao test == testa se tem o que  entre entre os //
// console.log(regex1.test(fonte)) 

// funcao exec --com a flag () parenteses separa grupos que recuperamos por posição de array
// Obs : O que esta separada por () tem que estar identico a fonte original, inclusive espaços (tudo)
*/

console.log(encontrado1[0]);
console.log(encontrado1[1]);