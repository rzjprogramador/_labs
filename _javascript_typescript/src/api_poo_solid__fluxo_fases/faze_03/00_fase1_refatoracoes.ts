/* eslint-disable no-unused-vars */

const refatoracoes_por_caso_de_uso = {
    service_usecase: 'O que era service vira usecase',
    cria_controller_deste_casodeuso: `
    - Onde ira integrar o casodeuso --
    - e um metodo handle que vai manipular o casodeuso no controller que vai retornar uma Resposta
    - recebendo o request e response do express
    - deste casodeuso agora integrado usar o metodoExecutador passando as props recebidas do http
    - retornando a resposta ao http
    `,
    no_index_doCasoDeUso_o_main_injecoesDependencias: `
    - instanciar o Repo
    - instanciar o casoDeUso que quer e precisa receber o obj do Repo

    - instanciar o controller que quer e precisa receber o obj do casodeUse que traz com ele o Repo
    `,
    unica_exportacao_deste_controller: `Exportar somente o obj do controller que esta pronto tendo todas injecoes para usar na rota`,

    na_rota_usar_o_controller: `recebendo request e response e retornando o obj do controller com o handle manipulador devolvendo o request e response`

}
