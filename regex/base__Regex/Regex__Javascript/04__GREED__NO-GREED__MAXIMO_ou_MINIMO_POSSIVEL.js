/*
QUANDO NAO ESPECIFICAMOS OS CARACTERES DENTRO DO ENVOLTO

GREED == AMBIÇÃO --PEGA MAXIMO POSSIVEL (usar == .+)
NO-GREED == PEGA MINIMO POSSIVEL (Divide em items com virgula --usar == .+?)


// pegar tudo dentro das tags escapando a barra com barra inertida no fechamento da tag 
//  <.+>     .+     <\/.+>

// .+  -- pega tudo do que esta envolto -- barra invertida escapa

// .+? === pega tudo e divide em items no caso vai dividir todas divs do texto

*/

const { html } = require('./ajuda/fonte2')


const regex4 = html.match(/<.+>.+<\/.+>/g) // greedy == tudo possivel
const regex44 = html.match(/<.+?>.+?<\/.+?>/g) // non-greedy == minimo possivel 

console.log(regex4, regex44)