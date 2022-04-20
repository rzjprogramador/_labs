# PARAMETROS DINAMICOS NA OPERACAO CONSULTA
Onde vc esta passando de forma hardCode Marretada o valor coloque a variavel a ser criada nos ()  dos params da operacao.

## EXEMPLO CONSULTA COM PARAMS DINAMICOS
query ALL_PROD_ENCOMENDA_BY_API(
  $order: String = "asc"
  $sort: String = "indexRef"
  $start: Int = 0
  $limit: Int = 3
) {
  getAllProdutoEncomendaAPI(inputPaginacao: {
    _order: $order
    _sort: $sort
    _start: $start
    _limit: $limit

  }) {
    id
    indexRef
    remetente
    destinatario
  }
}

### CONSULTA PASSADA VIA VARIAVEIS JSON DO CLIENT:
> QUE VAO DAR VALOR AS VARIAVEIS DE PARAM DINAMICOS E SERAM PRIMEIRAS OPCOES.
> 
{
  "order": "asc",
  "sort": "indexRef",
  "start": 0,
  "limit":2
}

---

# EXEMPLO CONSULTA COM VALORES HARDCODE MARRETADOS
query ALL_PROD_ENCOMENDA_BY_API {
  getAllProdutoEncomendaAPI(inputPaginacao: {
    _order:"asc"
    _sort: "indexRef"
    _start: 0
    _limit: 3

  }) {
    id
    indexRef
    remetente
  }
}
// HARD CODE NAO UTILIZA DADOS VINDOS DO JSON DO CLIENT