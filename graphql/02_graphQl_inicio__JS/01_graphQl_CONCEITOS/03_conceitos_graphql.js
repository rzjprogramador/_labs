/* eslint-disable no-unused-vars */

const graphqlConceitos = {
  rota: `Unica rota Post `,
  contexto_graphql: `O GraphQL é vc definir um tipo e resolver este tipo : type(tipagem) >> resolver(funcao)`,
  recursos: `determinamos o recurso que queremos acessar pelo corpo da requisicao que estamos montando. ex: query {recurso() {}}`,

  metodos: {
    buscar_info: `query >> consultar - get - mostrar`,
    mudar_info: `mutation  >> salvar - criar - editar - deletar`,
    tempo_real: `subscription >> tempo real nao precisa da lib socket.io`,
  },
  requisicoes: `Podemos fazer multiplas requisicoes dentro da mesma consulta`,
  sintaxe_requisicao: `
    - json para escopar tudo
    - metodo recursoFront {
        funcaoRecursoDoBackend() {}
    }// fim escopo json.

    ex. sintaxe:
    mutation nomeRecursoNoFront {
        recursoNoBackend (param) {
            prop a modificar
        }
    } // fechou um obj pode abrir outro dentro deste mesmo json que sera outra requisicao pedido

    query recurso {
        props que quer algo
    }
    `,
  documentacao: `O Schema guarda a tipagem dos breakpoints e dele os seus retornos e parametros .. não precisa da lib swagger para documentacao. `,

  tipos: {
    escalar: `tipos scalar são tipos primitivos sempre começa com letra Maiuscula`,
  },

  retorno_obrigatorios: `
    - Por Padrao todos campos vem nulo sem obrigatoridade, 
    - Na Tipagem inserir exclamação ! para ser obrigatorio ter valor no campo 
    - Para que o tipo nao pode ser nulo
    
    // Obrigatoridade em Vetor de Dados : exemplo:
    listaDeTextos: [String!]! 
    - Pode retornar um array vazio porque ainda assim é um tipo array, 
    - A "!" dentro quer dizer que não pode voltar nulo dentro do array 
    - E a "!" fora dos [] quer dizer que nao pode retornar nada que não seja um array quanto menos nulo
    
    `,
  contexto_app: ` 
    Entrada top level do grapho é o Query.

    - È sempre criando tipo e resolvendo este tipo.

    - Na consulta sempre que chamamos um campos é executado o seu resolver para trazer um resultado do tipo que prometemos na tipagem .

    - Todo campo que for configurado como obrigatorio tem que ter uma resolução um resolver que retorna o que foi prometido . senao retorna erro.
    Se nao for resolvido ao ser chamado na consulta retornará nulo.


    
    `,
};
