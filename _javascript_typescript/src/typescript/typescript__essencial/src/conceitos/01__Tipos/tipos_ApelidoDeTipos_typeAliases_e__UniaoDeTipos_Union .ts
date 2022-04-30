/* Definindo tipos  ============================ */

/* UNIAO DE TIPOS -- union */
type Uid = number | string                         /* defini que o Uid agora pe um tipo a ser usado e que pode ser string ou number */

/* APELIDO DE TIPOS -- type aliases */
type Plataforma = 'Windows' | 'Linux' | 'Mac Os'  /*Quem for usar este tipo tem que retornar somente um destes valores*/

type ObjPerson = {nome: 'Rei'}


/* funcoes usando o type alias que tipam variaveis de opcoes args*/ 
function logDetalhes (uid: Uid, item : string) {
    console.log(`O produtor de id ${uid} tem ${item}`)
}
logDetalhes(10, 'Bola')


function logInfo (uid: Uid, user: string) {
    console.log(`O usuario ${user} tem o id ${uid} ..ok `)
}
logInfo(33, 'Reinaldo')


function renderPlataforma (plataforma: Plataforma) {
    return plataforma
}
renderPlataforma('Windows')


function testPessoa (pessoa: ObjPerson) {
    console.log(pessoa)
    return pessoa
}
testPessoa({nome: 'Rei'})

/*  */