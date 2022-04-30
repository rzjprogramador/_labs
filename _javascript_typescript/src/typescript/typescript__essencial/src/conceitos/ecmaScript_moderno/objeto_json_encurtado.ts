/*
Json Encurtado
Criando objeto json apartir de variaveis 
sem repetir os nomes iguais de chaves e variaveis
cda chave do objeto json ta puxando uma variavel externa com o mesmo nome
assim tendo o emsmo nome nao precisa explicitar o nome da variavel no obj json
*/

let nome2 = 'Reinaldo2'
let idade = 43
let empresa = 'RzjProgramador'

const user = {
  nome2,
  apelidoChave_Idade: idade,
  empresa,
}

console.log(user)