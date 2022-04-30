// Entrada do Dado para comparacao :
const dado = 0
// -------------------------

// vamos comparar a var boaleano --conforme a entrada de dado : dado
var boleano

function func() {
    if (dado) {
        boleano = true
        console.log(boleano, ' O dado é --> Verdadeiro')
    } else {
        boleano = false
        console.log(boleano, ' O dado é -> Falso')
    }
}
func()

/*
BOLEANO :: Truthy e Falsy 
{{ Só de colocar na expressao do if ele ja retorna o valor de Truthy Verdadeiro ou Falsy falso }} 

* QUALQUER VALOR QUE NAO SEJA FALSY --JÁ É TRUTY -- VERDADEIRO
* VALORES FALSY -- FALSO
undefined        -- indefinido
null             -- nulo
0                -- zero apra baixo
-0               -- numeros negativos
' ' ou " "       -- strings vazia


*/
