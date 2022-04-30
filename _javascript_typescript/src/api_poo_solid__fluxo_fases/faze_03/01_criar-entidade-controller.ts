/* eslint-disable no-unused-vars */

const casoDeUso_CriarEntidade_Controller = {
    contexto: `No Controle usa o casoDeUso- Manipula o recebimento-http -docasoDeUso usa o executa a combinacao do recebimento`,

    importacao_integracao: {
        opcoesParaConstrucao: `no construtor integrar o CasoDeUso-UseCase - fazendo composicao`
    },

    MetodoManipulador: {
        entrada: `
        - Metodo Manipulador handle -- recebendo request e response do express devolvendo um Response
        - extrai infoHttp com campos apra fazer match com os que vai passar pro executador()
        `,

        processamento: {
            usa_integragacao: `usa var integrada chamando o execute passando o recebimento da informacao do http`
        },

        saida: {
            respondeHttp: `responde passando status da operacao no formato valido para a view - pode passar mensagem amigavel`
        }
    }
}
