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


/*  ------------------------------------------------
*** FUNÇÃO
 ------------------------------------------------ */

function captalizar(colecao, atributo) {

    if(typeof colecao[0] == 'object') {
        let resultObj = colecao.map((obj) => {
            let primeiraLetra = obj[atributo].charAt(0).toLocaleUpperCase()
            let restoTexto = obj[atributo].slice(1)
            obj[0] = primeiraLetra + restoTexto
            return obj
        })
        console.log(resultObj)
    }
    else {
        let resultItem = colecao.map((item) => {
            primeiraLetra = item.charAt(0).toLocaleUpperCase()
            restoTexto = item.slice(1)
            item = primeiraLetra + restoTexto
            return item
        })
        console.log(resultItem)
    }
} 
console.log(captalizar(listaObj1, 'nome')) // invocando lista de objetos literais com chave e valor
console.log(captalizar(listaItem1)) // invocando lista Array de item sem chave

/*

-------------------------------------------

Sintaxe desta funcao :

funcaoPai() {
    <condicional>   :: TESTAR SE É O QUE PRECISO
    <loop com arg>  :: MAPEAR
    <no recebido do mapeamento> :: MODIFICAR COM FUNCOES MODIFICADORAS - RECEBIDO MAPEADO
    <GUARDAR RESULTADO DAS MODIFICACOES NO QUE RECEBEU DO MAPEAMENTO >
    <RETORNAR O QUE RECEBEU>
    <mostrar no console o resultado deste Mapeamento>
}

-------------------------------------------
LIÇÃO FUNÇÃO
Se precisa definir se é algo ...faz uma condicional no inicio pra saber se é verdadeiro 
pra seguir e fazer o que vai vir no bloco.

# PARAMETRO FUNCAO PAI
O que for passado no parametro desta Funcao Pai -- é recuperado na sua invocação o client responde estes aparametros

# PARAMETRO FUNCAO FILHO DENTRO DA FUNCAO PAI
Analogia : ao passar parametros "Ela Pediu"  // ao devolver no return >> "Eu devolvo o que ela pediu"

Tecnicamente : o que for passado no parametro desta funcao filha dentro da funcao pai 
é retornado no return dentro desta funcao filha pra devolver o que ela pediu

# INVOCAÇÃO
Ao invocar a funcao apra usar em lista de objeto >> passar a lista de objeto e o atributo desejado dentro de aspas

Ao invocar a funcao apra usar em lista de items >> passar somente a lista de items.


*/