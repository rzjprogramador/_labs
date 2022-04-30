/* eslint-disable no-unused-vars */
const main_index_injecoes_controller = {
    preciso_ter_pronto_os_obj: {
        cenario_que_preciso_ter_pronto: ['respositorio', 'casoDeuso', 'controller'],

        valor_repositorio: `no caso de singleton dou valor com a Classe.metodo que da o valor da classe ao Repo`,

        valor_casoDeUso: `vai ter o valor de um repo --> Instancio a Classe e dou o valor prometido no construtor - que é um repositorio`,

        valor_controller: `Controller vai ter o valor do CasoDeUso que tem o valor do Repo `,

        preciso_expor_para_fora: `Expor pra fora o controller`,

        exemplo: `
        // CONFIGURANDO REPO
        const categoriasRepository = CategoriasRepository.getInstance()

        // CONFIGURANDO CASO-DE-USO
        const createCategoriaUseCase = new CreateCategoriaUseCase(categoriasRepository)

        // CONFIGURANDO CONTROLE

        const createCategoriaController = new CreateCategoriaController(createCategoriaUseCase)

        // EXPORTANDO TUDO PELO CONTROLE

        export { createCategoriaController }

        `
    }
}

/*

*/
