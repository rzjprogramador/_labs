
function enviarEmail(corpo: string, para: string) {

    return new Promise((resolve: any, reject: any) => {

        // Logica ...
        setTimeout(() => {
            let deuErro = false // define se sera resolvido ou rejeitado a promesa

            console.log('fez algo antes da verificao da promesa')

            !deuErro ? resolve({ tempo: '8 seg', para: 'ela@email.com'}) : reject('Erro Fila cheia')
            
        }, 2000);


    })
}

enviarEmail('Ola mundo', 'eu@email.com')
.then(({ tempo, para }: any) => console.log(`Sucesso then e recebi dados via params : ${tempo} e ${para} `))
.catch((erro: any) => console.log(`ERRO -- Promise Rejeitada mensagem : ${erro}`))


/*  

//  ========  PROMISE  ======== 

Nome: Promise
Traducao: Promessa
Beneficio:
Conceito: è uma promessa , promete fazer algo, pode dar certo ou falha 
tem funcoes para tratar o sucesso e tbm para tratar a falha

Pode dar certo = resolve():: e Pode dar Errado : reject()
Executando: ja retorna uma nova Promessa de imediato
            
Onde é referenciado: 

Entrada - Dependencia - Params:
1º param : uma funcaoAnonima com 2 params resolve, reject -- resolve apra tudo ok e reject para falha

Params resolve - reject :: Só podem ter 1 parametro unico , se precisar mais que um valor usar objeto json

passando parametro : 
recuperando params :

Saida - Output : na invocacao usar o .then(() => {}) para recuperar o parametro de sucesso resolve e o metodo .catch() para recuperar o apram de erro reject
obrigatoridade : Sempre ao usar um .then()  usar para tratar a rejeicao o .catch()
detalhes :
sintaxe:  resolve() // reject() // .then(() => {}) //
exemplos : 

*/