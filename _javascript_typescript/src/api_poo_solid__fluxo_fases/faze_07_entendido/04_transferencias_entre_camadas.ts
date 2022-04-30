
const transferencia_superRota_paraRepositorio = {
    onde_guardar: `Onde vai guardar torna um atributo privado`,
    inicializar_guardador: `Inicializar na construcao para inicializar configurado quando criado o obj`,

    na_classe_queDesaclopou: {
        assumirObjetivo: `
        - CRIAR METODO: metodo com o objetivo
        - PARAMS: o que receberia por param da requisicao receba neste metodoObjetivo obedecendo um contratoDTO
        - PROCESSAMENTO: transfere o que estava solto no breakpoint que era Mescla para criacao e ...
        - INSERCAO BANCO: insercao na tabela do bancoFAke.

        `
    },
    de_onde_foi_retirado: {
        cria_objeto_queDesacloplou: `instancia a classe que desaclopou criando seu objeto`,
        usa_objeto_queDesaclopou: `chama este objetoQueDesaclopou chama seu metodo que assumiu a responsabilidadeDoObjetivo e passa o esperado que já foi extraido do pedido da requisicao`,
        resposta_api: `Neste momento nao posso retornar um json - entao retornar um send() para resposta finalizar`
    }
}
