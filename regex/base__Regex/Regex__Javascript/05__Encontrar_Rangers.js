/*
[] >> Qualquer coisa entre [] quero que encontre um conjunto
^ >> negacao
[-] >> de alguma coisa ate outra coisa ex: de 0 a 9 >> [0-9]
+ >> Vai encontrar na sequencia

\u >> depois o que quer ser encontrado e range -



*/

const { alfabeto, numerosSeparadosPorEspacos } = require('./ajuda/fonte2')

// console.log(alfabeto.match(/[abc]/gi)) // buscar em itens - retorna um array de cada item
// console.log(alfabeto.match(/[abc]+/gi)) // com + busca um conjunto sequencia do procurado junto
// console.log(alfabeto.match(/[abc123]+/gi)) // com + busca um conjunto 
// console.log(alfabeto.match(/[^abc123]+/gi)) // com ^ negando -- menos o que vem a direita
// console.log(alfabeto.match(/[0-9]/gi)) // com - de uma coisa a outra -- separados em items
// console.log(alfabeto.match(/[0-9]+/gi)) // com []+ de uma coisa a outra -- separados em conjuntos
// console.log(numerosSeparadosPorEspacos.match(/[0-9]+/gi)) // Se a fonte tiver espaços vai separar por items
// console.log(numerosSeparadosPorEspacos.match(/[9-0]+/gi)) // ESTE VAI DAR ERRO PORQUE O RANGE TA INVERTIDO DO MAIOR PRO MENOR [9-0] Range out of order in character class
// console.log(alfabeto.match(/[0-4]+/gi)) 
// console.log(alfabeto.match(/[0-5a-eD-G]+/gi)) // Buscando VArios Range de 0a9 ...de a-e  ..... de D-G
// console.log(alfabeto.match(/[^0-5a-eD-G]+/gi)) // negando COM ^ : / VAI VIR TUDO MENOS O Q VC NEGOU/: será negado >> a BUSCA DE VArios Range de 0a9 ...de a-e  ..... de D-G 

console.log(alfabeto.match(/[\u00AO-\u00BA]+/gi)) // Pegar o code no unicode da web e tbm tem que estar na variavel fonte --Usar sem o U+ na frenet igual do unicde

