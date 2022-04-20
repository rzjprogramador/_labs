# INPUT
usabilidade: Passar objetos empacotados de configuracoes ou valores via parametro apra os resolvers
casos:
- caso de objeto com muitos parametros faço um empacotamento input e uso este empacotado
- caso de configuracao : input de configuracao de paginacao o obejto tera campos de argumentos para configurar  paginacao

## Implementacao Input :
Em pasta separada criar um input que é uma TIPAGEM de consulta usa o gql
- define o nome do input e os campos que terao o objeto
- obs: nada pode ser obrigatorio
- detalhe: COM ESTA CRIACAO DO TIPO CONSULTA ELE JÁ ESTRA DISPONIVEL NO CONTEXT
ex: 

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: String
    _start: Int
    _limit: Int
  }
`;

### ONDE VAI USAR NO CODIGO
obs: USE SOMENTE AONDE FOR RETORNAR COLECOES/PLURAISQ ARRAYS
> EM TIPAGEM ::  defina um nome de variavelDeContexto e chame por param do tipo que tem vai disponibiliza-lo
ex:
getAllProdutoEncomendaAPI(
      inputPaginacao: ApiFiltersInput
    ): [ProdutoEncomenda!]!

###
> RECUPERO A VARIAVEL DE CONTEXTO-CRIADA extraindo no 2º param do resolver()
> passo uma funcao de mudança de url do js new URLSearchParams(<PASSO O INPUT_CONTEXTO>)
> DEFINO E RETORNO O RESULTADO DESTA NOVA URL ADICIONANDO O SEPARADOR DE URL RECURSO ?/

ex: 
const getAllProdutoEncomendaAPI = async (_, { inputPaginacao }, context) => {
  const prodPaginacaoApi = new URLSearchParams(inputPaginacao);
  const colecaoProduto = await context.getAllProdutosEncomendaAPIContext(
    `?/${prodPaginacaoApi}`,
  );
  return colecaoProduto.json();
};

### CONSULTA OPERACAO :
> NA OPERACAO DE CONSULTA USO A VARIAVEL-PARAM-CONTEXTO-DO-INPUT 
> HARDCODE:: PASSO COMO VALOR DESTE OBJ O OBJ COM CHAVE E VALOR DA PAGINACAO COMO SE FOSSE NA URL MAS QUE SE PEDE NA TIAPGEM DESTE INPUT

EX:
query ALL_PRODUTOS_BY_API {
  getAllProdutoEncomendaAPI(inputPaginacao: {
    _order: "asc"
    _sort: "indexRef"
    _start: 0
    _limit: 1

  }) {
    id
    indexRef
    remetente
    destinatario
    logradouro
    quantidade
    cidade
    estado
    preco_base
    acrescimo
    trivial_preco_final
  }
}