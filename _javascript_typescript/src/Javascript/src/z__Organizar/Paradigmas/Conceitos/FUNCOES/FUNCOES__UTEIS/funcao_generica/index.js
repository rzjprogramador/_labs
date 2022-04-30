const lista1 = ['item1_lista1', 'item2_lista1', 'item3_lista1', 'item4_lista1']

const lista2 = ['item1_lista2', 'item2_lista2', 'item3_lista2', 'item4_lista2']

/*
Funcao Generica : operacao simples - juncoes
Não necessita de obter externo
*/
function soma(a, b) {
    return a + b
}
console.log(soma(1, 2))

function concatenar(a, b) {
    return `${a} e ${b}`
}
console.log(concatenar('Primeiro', ' Segundo'))

/*
funcao Generica :: transformadora 
passa quantos parametros precisa mudar
Se for trasnformar um interavel /lista ) tem que "obter este externo interavel" a lista 
agora tendo a lista faz a transformacao que quiser 
e retorna a var que guardou a instrucao desta operacao

Para usa-la :
Na invocacao desta funcao generica passa por param a lista que quer transformar
Obs: pode ser usada para diversas listas 
*/
function genericaCaixaAlta(vetor) {
    const obtido = vetor.map((i) => i.toUpperCase())
    return obtido
}
console.log(genericaCaixaAlta(lista2))
