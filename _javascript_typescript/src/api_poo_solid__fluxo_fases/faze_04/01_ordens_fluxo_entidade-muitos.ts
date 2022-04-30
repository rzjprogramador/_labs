/* eslint-disable no-unused-vars */

const fluxo_entidade_muitos = {
    modelo: {
        entrada: `definir todos campos da entidade `,

        processa: `Modelar a EntidadeAbstrata com todos campos que terá e criar um identificador apenas uma vez se nao tiver`,

        saida: `Vai dar o modelo completo com todos campos da EntidadeAbstrata`
    },

    guardador: {
        entrada: `
        (Implementacao) -> Repositorio :: vai ter
        - guardadora
        - varINSTANCIA que é a propria-classe
    `,

        processa: `
        > metodo buscarInstancia() :: vai disponibilizar pra fora a instancia desta guardadora unicamente
        > manipular as info-recebidas `,

        saida: `
        deixando um comando do objetivaDaCausa pra ser executado no ObjetivoDaCausa`
    },

    objetivoDaCausa: {
        contexto: `
        è o unico que prepara pra EXECUTAR O OBJETIVO:
        com as info que a entidade terá
    `,

        entrada: `
            ..
            `,
        processa: `
        > mas antes:
        - reaproveitando o guardador - Verifica ??? se ja existe pra nao duplicar
        senao ai sim executa o objetivo da causa com as info que terá a entidade.
            `,
        saida: `
        Sendo assim deixa o comando pronto pro controaldor para executar as info que a entidade tera que fazer pra realizar o Objetivo
        `
    },

    controlador: {
        entrada: `
            recebe do httpCliente as info
            `,
        processa: `
                Manipula o comando do objetivoDaCausa e executa o comando ja preparado vindo do objetivo
            `,
        saida: `Resposta da combinacao entre o recebido e o que a entidade se preparaou para ter `

    }

}

/*
RESUMAO ENTIDADE_DE_MUITOS CASOUSO - PROJETAR EM CLASSE --> E CONSEQUENTEMENTE REPRODUZIR EM OBJETOS :
- VAI PRECISAR :

1- ONDE_GUARDA --que é o Repositorio :: implementacao : vai ter onde guarda -- vai FazerOCaso e guardar

2- EXECUTADOR --que é CasoDeUso :: que "usa" executa a acao de guardar onde_GuardaREPO

3- CONTROLADOR -- que vai MANIPULAR executando a combinacao do que vem do HTTP com o que vem do CasoDeUso

4- EM CLASSES > MAIN_INDEX // EM OBJ na ROTA --  -- que vai usar o CONTROLADOR Pronto e MANIPULAR com o pedido e resposta da rota

------
5 - TENDO CADA ENTIDADE_DE_MUITOS JA CRIADA COM REPOSITORIO ::
USA ESTE MESMO REPO QUE É INSTANCIA UNICA --> PARA OS OUTROS CASOS DE USO REFERENTES A ESTA ENTIDADE
EX: LIST(), LISTAR_UNICO(), UPDATE(), DELETE()

--------------------
DETALHADO ::
--------------------

1- comecar pelo caso de uso - CONTROLE --> que vai ter um casoDeUso
- com metodo manipulador handle que faz o que faria na rota >
-- recebe props http
-- pega o casoDeUso que se apossou e EXECUTA()
-- e retorna o resultado da execucao do caso de uso no formato valido HTTP

2- faz o CASO_DE_USO :
- que vai ter o repositorio que guarda
- e o metodo executador() que promete uma lista de colecao desta Entidade
- dentro vamos pegar este repositorio que guarda usar o metodo que se propoem este CasoDeUso
-- e criar uma referencia que tem o resultado do que faz este caso de uso
-- e retornar este resultado que é o prometido pelo metodo
> mandando este resultado para o Controle

3 - MAIN __INDEX __:
 INSTANCIACOES/INVOCACOES E INJECOES das INTEGRACOES : Criar e Injetar os Objetos
 - criar o repositorio
 - criar o casoDeUso --> dar para ele o repositorio
 - criar o controle --> dar pra ele o casoDeUso que ja tem o repositorio
 > exportar somente o controle que ja tem a superIntegracao (repositorio + casoDeuso) tudo neste controle

 4- ROTA DO CASO :
 > este superControle usamos na rotaDoCaso

*/
