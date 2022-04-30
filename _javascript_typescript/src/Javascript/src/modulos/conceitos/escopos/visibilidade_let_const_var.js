/*  
DECLARACOES DE VARIAVEIS
let : Protegida apra escopo - nao pode ser redeclarada, pode mudar seu valor , só é enxergue no escopo que foi criada
const: Seguranca :: Constante : Nao pode ser alterado seu valor
var : esta aberto ao escopo global, consome mais memoria
*/

// let >> escopo
let nome = 'Reinaldo'
nome = 'Renata'
console.log(`Nome foi definido como ${nome}`)

if(true) {
    let compania = 'RzjProducoes'
    console.log(compania)
    // posso ver o valor da let dentro do escopo , mas nao posso acessar a let fora dele esta protegida
}


// Constante Primitivo
const endereco = 'Rua 1'
// endereco = 'Rua 2'  // nao pode mudar o valor da constante , se precisa mudar o valor a redeclare como let
console.log(endereco)


// Constante Referencia
const person = { name: 'Reinaldo', company: 'RzjProgramacoes' }
person.name = 'Nome qualquer'
console.log(person)