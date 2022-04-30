
# FUNCAO

## FUNCAO COM PARAMETRO
Funcao com Parametro usa o Parametro : VC DA OPCOES E CAPTURA ESTA OPCAO UTILIZADA
Quando vc quer que quem vai utiliza-la envie algo e pelo param vc captura o que mandaram e faz algo com este param recebido ex:

...

function envieAlgo(algo) {
    console.log(`Recebi >> ${algo} `)
}
envieAlgo('Meu algo é um meu nome')
// resposta : Recebi >> Meu algo é um meu nome

...

function capturarNome(nome) {
     console.log(`Olá seu nome enviado é  ${nome}`) 
}
capturarNome('Reinaldo')
// Resposta: Olá seu nome enviado é Reinaldo

---

