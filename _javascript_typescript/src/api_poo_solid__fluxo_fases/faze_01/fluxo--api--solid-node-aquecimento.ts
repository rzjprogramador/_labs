/* eslint-disable no-unused-vars */

const ordens = {
    ordens_criacao: 'Entidade --> Interface --> Implementadora --> Rota',
    ordem_Entidade_CasoUso: 'Entidade --> ContratoRepo -- ClasseRepo--> Servico-CasoDeUso --> Rota'
}

const constratoDeRepo = {
    conceito: 'Contrato modelos apra Repo quem quer ser um Repo -- somente assinatura de metodos sem corpo para serem implemnetados no Repo',
    quem_obedece: `Contrato de Repo sera implementado por quem quer ser um repo mais comum :
    entidadeRepositorio || externoEntidadeRepo ||
    `
}

const entidadeRepositorio = {
    conceito: 'Um Repo implementa da corpo deixa pronto o metodo do Caso de uso para a rota utilizar',
    contrato_a_obedecer: 'o Repo -> implementa Contrato de Repo',
    objeto_entidade: 'Instancia a classe da model da Entidade e cria o obj da entidade',
    deixa_obj_pronto: 'mescla match obj recebido do parm da funcao com obj configurado da Entidade',
    coleciona: 'guarda na colecao que coleciona muitas desta mesma entidade'
}

type FluxoServicoRepo = 'O Service esta executando metodos criados no Repo'

type Servico = 'Verifica se existe --> e executa  --> metodo do CasoDeUso'

type Servico_Executador = 'No Servico executa() --> o metodo do casoDeUso'
