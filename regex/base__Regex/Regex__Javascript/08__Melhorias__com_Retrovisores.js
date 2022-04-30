/*
.*?  === pode vir qualquer coisa aqui depois
*/


const html2 = `<p class"classeP">Olá mundo</p> <p>Hello</p> <div>Sou a div</div> <span>Sou Span</span>`;

// console.log(html2.match(/<.+?>.+?<\/.+?>/g)) // Aqui tenho cada tag --separados em cada item 
// console.log(html2.match(/<[a-z]+>.+?<\/.+?>/gi)) // MELHORIA -2 >> COM [a-z]+ ... e gi pra global e sensitive

// Usando Retrovisores usados pra representar cada grupo $1 $2 $3  --pode recuperar como :  \1
console.log(html2.match(/<(\w+)>.*?<\/\1>/gi)) // MELHORIA -3 >> com retrovisor \1 que é o grupo q simulou o p dentro da tag e recuperou onde precisou de repetir 


/* TESTANDO OUTRAS COISAS
const result = html2.match(/<(\w+)>.+?<\/\1>/gi)
let quantidade = result.length
console.log(quantidade)
*/