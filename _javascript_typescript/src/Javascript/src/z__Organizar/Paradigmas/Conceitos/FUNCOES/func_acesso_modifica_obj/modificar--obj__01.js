
const lista1 = [
    { nome: 'alface1', valor: 2.5, },
    { nome: 'tomate', valor: 3.5, },
    { nome: 'batata-palha', valor: 2,},
]

const lista2 = [
    { nome: 'futebol', valor: 2.5, },
    { nome: 'game', valor: 3.5, },
    { nome: 'natacao', valor: 2,},
]

/* Esta funcao vai percorrer a lista de objetos - 
mudar a primeira letra pra caixa alta,
juntar com o resto do texto e  ordenar por ordem alfabetica pela minha regiao  */

// Obs : esta funcao é generica - dentro dela nao tem ligacao com nomes de variaveis externas

function captalizar(colecao, atributo) {
    // certificar qual o tipo da colecao
    if(typeof colecao[0] == 'object') {

        /* se for um object...faz um loop na colecao de obj e modifica o alvo obj[atributo]
         o segredo é fazer : todas operacoes no obj passado como o que queriamos acessar [ na posicao que queremos] 
        ele é o alvo o obj na posicao */

        const result = colecao.map((obj) => {
            
            let letraInicial = obj[atributo].charAt(0).toLocaleUpperCase()
            let restoTexto = obj[atributo].slice(1)
            obj[atributo] = letraInicial + restoTexto
            return obj

            // Se eu quiser mudar o valor da prop nome
            // obj.nome = 'teste'

            // Se eu quiser mudar o valor do atributo
            // obj[atributo] = 'teste'

        })

        console.log(result)

    }

    
}

// Na invocacao funcao(colecao, 'nome do atributo passado pra fazer o mapeamento no loop')
console.log(captalizar(lista2, 'nome'))