
// FUNÇÃO :
function captalizar(colecao, attr) {
    if (colecao.length > 0) {
        if (typeof colecao[0] == 'object' && attr) {
            colecao.map((item) => (item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1)))
        } else {
            colecao.map((item) => (item = item.charAt(0).toUpperCase() + item.slice(1)))
        }

        return colecao
    }
}

// LISTAS
/*  ------------------------------------------------
*** ENTRADA DE DADOS
 ------------------------------------------------ */
 
 const listaObj1 = [
    { nome: 'zorra', valorAdicional: 0.5, },
    { nome: 'macarr', valorAdicional: 0.5, },
    { nome: 'gall', valorAdicional: 0.5, },
]

const listaObj2 = [
    { nome: 'zorra', valorAdicional: 0.5, },
    { nome: 'macarr', valorAdicional: 0.5, },
    { nome: 'gall', valorAdicional: 0.5, },

]


const listaItem1 = ['jogar', 'nadar', 'programar']
const listaItem2 = ['js', 'ts', 'python', 'nest']

// ------------------------------------------------


/*  ------------------------------------------------
*** UTILIZAR
 ------------------------------------------------ */

console.log(captalizar(listaObj1, 'nome')) // invocando lista de objetos literais com chave e valor
console.log(captalizar(listaItem1)) // invocando lista Array de item sem chave