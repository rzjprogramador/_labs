const lista1 = ['maca', 'abacate', 'pera', 'damasco']

const lista2 = ['programar', 'futebol', '1']


function genericaCaixaAlta(vetor) {
    const obtido = vetor.map((i) => i.toUpperCase())
    return obtido
}
console.log(genericaCaixaAlta(lista2))




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