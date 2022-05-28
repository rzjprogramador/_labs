
# TODOS PRODUTOS BY API

### COM DADOS DE PAGINACAO DINAMICOS VINDOS DO CLIENT JSON
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
    logradouro
    quantidade
    cidade
    estado
    preco_base
    acrescimo
    trivial_preco_final
  }
}

// ENVIANDOS OS DADOS DE CONFIGURACAO PELO CLIENT NO FORMATO JSON
{
  "order": "asc",
  "sort": "indexRef",
  "start": 0,
  "limit":2
}

---

### COM DADOS DE PAGINACAO HARDCODE ::
query ALL_PROD_ENCOMENDA_BY_API {
  getAllProdutoEncomendaAPI(inputPaginacao: {
    _order: "asc"
    _sort: "indexRef"
    _start: 0
    _limit: 2

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
// NAO É UTILIZADO JSON DO CLIENT - POIS OS DADOS ESTAO MARRETADOS HARDCODE
---

