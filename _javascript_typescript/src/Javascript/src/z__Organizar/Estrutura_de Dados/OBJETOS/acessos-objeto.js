const ingredientes = [
    {
        nome: 'alface',
        valor: 2.5,
    },
    {
        nome: 'tomate',
        valor: 3.5,
    },
    {
        nome: 'batata-palha',
        valor: 2,
    },
]

// Acessando
console.log(ingredientes) // acessar objeto inteiro
console.log(ingredientes[0]) // acessar item inteiro do objeto >> objeto[< Obj da POSICAO >]
console.log(ingredientes[2])
console.log(ingredientes[0].nome) // acessar VALOR DA PROP. nome  >>  objeto[<POSICAO>].propriedade
console.log(ingredientes[1].valor) // acessar VALOR DA PROP. valor  >>  objeto[<POSICAO>].OutraPopriedade
