
function enviarEmail(para: string, corpo: string, callback: any) {

    setTimeout(() => {
        // Logica de envio de Email que é a funcao principal

        /* 
        tratar falhas que podem acontecer com o callback
        cria uma variavel para guardar o stado da minha verificacao de decisao fazer uma coisa ou outra
        defino o que fazer com o boleano -- e recupero o que foi prometido nos callbak na sua invocacao
        */
        let deuErro = false // aqui define qual callback sera mostrado
        deuErro ? callback(5, '8segundos', 'Envio FALHOU !!!') : callback(5, '8segundos')

    },2000)
}

console.log(`Inicio envio Email`)
enviarEmail('Rei', 'Corpo da Mensagem', (tempo, quant, erro) => {
    if(erro == undefined) {
        /*
         foi passado se erro for verdade  como indefinido 
         para o caso onde nao passo params na definicao que pe o caso de sucesso

         Obs: o Paramtro de erro é sempre o ultimo ... para assim poder usar outros params normalmente 
         */
        console.log(`Usando params na definicao >> tempo ${tempo}, quant: ${quant} ...`)
        console.log('TUDO OK')
    }
    else {
        console.log(`Ocorreu um erro ${erro}`)
    }
})


/*  

Nome: callback 
traducao: executar depois
Beneficio: Executa em Ordem as funcionalidades
Detalhes: assim que executar a funcao em que ele é referenciado ... essa funcao sera executada tbm
Entrada - Dependencia - Params:
1º param : 
2º param :
3º param :
Detalhe Params e Recuperacao: Os params sao opcionais podem ser recuperados ou nao na sequencia
Onde é referenciado: Uma funcao callback é recebida no ultimo param
passando parametro : callback('Ok', 5, '8segundos')
recuperando params : recupera na sua definicao de funcao passando os params e utilizanod dentro da funcao
Saida - Output : 
sintaxe: 
exemplos : rota express é um callback :: app.get('/usuarios, (req, res) => {.....}) :: callback com parametros
no 1º é passado a string da rota -- no 2º uma funcao de callback que recebe req e res e serao usados dentro da funcao

*/
