const lista1 = ['maca', 'abacate', 'pera', 'damasco']

const lista2 = ['programar', 'futebol', '1']


function fnOrdenar(vetor) {
    return vetor.sort((a, b) => {
            return a.localeCompare(b)
        })
    }
    console.log(fnOrdenar(lista1))




/* Funcao com instrucao Modificadora Encadeada
    que modifica a primeira instrucao 
    
    explicado: na fnOrdenar temso a instrucao rpa usar a funcao sort( que ordena
    na funcao sort passamos anonimamente uma funcao para ordenar pela minha localidade
    CONCLUSAO: cada funcao esta recebendo outra funcao no primeiro parametro
    )
*/