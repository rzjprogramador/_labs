# CONSULTA PAGINACAO COM ENUM

query ALL_PROD_ENCOMENDA_BY_API(
  $order: ApiFiltersOrderEnum = DESC
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
    logradouro
    quantidade
    cidade
    estado
    preco_base
    acrescimo
    trivial_preco_final
  }
}

###  ENVIADO DO CLIENT EM JSON ::
{
  "order": "DESC",
  "sort": "indexRef",
  "start": 0,
  "limit":2
}