/* ENUM :: OPCOES EM UM TIPO 
PARA QUANDO PRECISO QUE SEJA ESCOLHIDO UM VALOR ..USO ESTE TIPO EM UMA VARIAVEL
  */

/* CONTRATO  */
type OpcoesLinguagens = 'Python' | 'Javascript' | 'Typescript'

/* PROCESSO :: UMA ACAO QUE RECEBE E DEVOLVE A OPCAO  QUE VEM DO CONTRATO */
function linguagemFavorita (linguagem: OpcoesLinguagens) {
    return `Minha linguagem é ${linguagem}`
}

/* UTILIZAR  :: ESCOLHO NA FUNCAO O TIPO DESEJADO*/
const minhaLinguagem = linguagemFavorita ('Typescript')
console.log( `Sem duvidas ... ${minhaLinguagem} ` )