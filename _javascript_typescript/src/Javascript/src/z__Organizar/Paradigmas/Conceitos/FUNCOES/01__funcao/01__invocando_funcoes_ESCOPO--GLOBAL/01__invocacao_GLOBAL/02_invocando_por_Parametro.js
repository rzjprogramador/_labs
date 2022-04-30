
/* GLOBAL -- > 2- INVOCAR FUNCAO PASSANDO-A POR PARAMETRO  */
var produto = { nome: 'sapato', preco: 150 }


// faço uma funcao que me calcula o imposto de 10% :
var formulaImpostoA = function (preco) {
    return preco * 0.1
}
// faço uma funcao que me calcula o imposto de 20% :
var formulaImpostoB = (preco) => {
    return preco * 0.2
}


// utilizar a funcao auxiliar no param
var calcularPreco = (produto, formulaImposto) => {
    return produto.preco + formulaImposto(produto.preco)
}
// Invocacao para calculo para 10%
console.log( calcularPreco(produto, formulaImpostoA) )

// Invocacao para calculo para 20%
console.log( calcularPreco(produto, formulaImpostoB) )


/* -------------------------------------------  */

/* IMPORTANTE : NAO ESQUECER DE DAR return no resultado da instrucao  */