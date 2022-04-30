/* eslint-disable no-unused-vars */

const materia_prima_cada_ENTIDADE_DE_MUITOS = {
    model: `Modelo da entidade - campos que vai ter -obrigatorios e opcionais - criacao de identificador unico que vai receber da lib uuid`,

    cada_CASO_DE_USO_DaEntidadeDe_MUITOS: {
        repositorio: `singleton: fornecera uma COLECAO_UNICA PARA GUARDAR - todos de Muitas Replicas da Entidade de Muitos

        - tera um metodo que diz o casoDeUso da entidade onde faz um match das props que recebe e que recria

        - tera um metodo para injetar no main esta singleton
        `,

        useCase: `serviço: executa as props da Entidade que receberá --e com : regras -- condicoes - verificacao - seExiste - validacao... ai sim
        FAZ A CRIACAO DO QUE SE PROPOEM A ROTA{ casoDeUso } e entrega validado para o controle `,

        controle: `
        recebe os dados doCasoDeUso ja validado no MANIPULADOR DE REPASSES HTTP <--> CASODEUSO_ENTIDADE
        --  faz um Match com o RECEBIDO DO HTTP EXTERNO -- (USANDO EXPRESS- REQUEST-RESPONSE)
        --- responde a api`,

        casoDeUso_MAIN_index: `
        CRIACOES DE OBJETOS :: INTEGRACOES via INJECOES
        cria o repositorio
        cria o casoDeUso e integra a ele repositorio
        cria o controle e integra a ele o casoDeUso

        exporta desta superIntegracao --> exporta para fora só o controle que traz todos integrado.
        para ser usado no breakpoint da rota
        `,

        na_rota: `importa este obj controle superIntegrado chama o manipulador e passa a pergunta e a resposta que ja estao configuradas. `
    }

}
