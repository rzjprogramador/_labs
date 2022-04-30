/* ### EXERCICIOS 
*/
// Se precisar importar o modulo
// const { cpfs } = require('./ajuda/fonte2')

const cpfs = `
Os CPFs são:
  254.224.877-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;

/* ENCONTRAR CPFS =================================================
# CONCEITO -- Encontrar de [0 a 9 ] {no maximo 3} << \. ESCAPA PONTO >> ISSO 3 VEZES 
##  E NOS 2 ULTIMOS NUMEROS << \- ESCAPA TRAÇO >>  -- Encontrar de [0 a 9 ] {no maximo 2}
*/

// console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g)) // forma 1
// console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g)) // melhoria 2 com \d  no lugar de [0-9]
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g)) // melhoria 3 com \d  >>>> colocando 2 repeticoes em grupos ( o que precisa repetir >> \d{3}\.) e quantificar por 2


// ================================================================


/* ENCONTRAR   =================================================
# CONCEITO -- 
##  
*/


// ================================================================

/* ENCONTRAR   =================================================
# CONCEITO -- 
##  
*/


// ================================================================


/* ENCONTRAR   =================================================
# CONCEITO -- 
##  
*/


// ================================================================


/* ENCONTRAR   =================================================
# CONCEITO -- 
##  
*/


// ================================================================