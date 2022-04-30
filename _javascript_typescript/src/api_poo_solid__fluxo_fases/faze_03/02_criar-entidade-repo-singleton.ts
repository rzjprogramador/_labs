/* eslint-disable no-unused-vars */

const casoDeUso_CriarEntidade_Repo_Singleton = {
    contexto: `
    O Repo vai se tornar um objeto de Configuracao na App
    - vai salvar os dados manipulados da Entidade na baseDeDados
    - entao precisa ser Uma Instancia unica um Singleton para nao ficar salvando a cada execucao em um local diferente : precisa salvar sempre no mesmo local `,

    cenario_precisa_ter: `
    VAI TER A PROPRIA CLASSE COMO INSTANCIA OBJ E PRA USAR TEM QUE CHAMAR A CLASSE+METODO

    - Repo Singleton vai usar o proprio Repo
    - disponibilizando o repo por metodo Publico da Classe pois nao pode ser instanciada

    - vai ter o metodo do CasoDeUso - aqui vai fazer a Criacao do casoDeUso

    - Vai guardar na base de dados Mais recriacoes desta mesma entidade formando uam colecao desta Entidade:: seja em Memoria, fake,...possivelmente BancoExterno`,

    props: {
        propDaClasse: `
        -um Array privado para guardar diversos desta Entidade

        - uma INSTANCIA desta propria Classe :: que ficara em referencia INSTANCE

        `,
        construcao_integracao: {
            opcoesParaConstrucao: `...`,
            configuracaoConstrucao: `Inicia o Array que é prop da classe como iniciando [] vazio`
        }
    },

    MetodobuscaInstancia: {
        entrada: `
        - No metodo getInstance () esta usando o Proprio Repositorio e via reotrna-lo para quem for usar fora.

        `,

        processamento: {
            usa: ``
        },

        saida: {
            resposta: ``
        }
    },

    MetodoCriador: {
        entrada: `
        DTO das info-obrigatorias - semelhante recebimento do http


        `,

        processamento: {
            usa: `
            -> cria obj  EntidadePrincipal
            - atribui a este objPrincipal os todos campos da Entidade configurando novamente os de sistema
            - chama o array e entrega este objProntoDaEntidade Mergiado com o Recebido

            `
        },

        saida: {
            resposta: `sem retorno -- somente comando -- já pra quem chamar sai execucao pronta`
        }
    }
}
