# CONSULTA 1 DADOS VINDOS DO OBEJTO MARRETADO

> TODOS ALL
query ALL_PRODUTOS_BY_API {
  getAllProdutoEncomendaAPI {
    id
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

---

## UM ESPECIFICO PRODUTO ENCOMENDA VIA API
> > BUSCA COM ID MARRETADO
query PRODUTO_ENCOMENDA {
  getProdutoEncomendaApi (id: "1") {
    id
    remetente
  }
}

---

## BUSCA COM ID DINAMICO NO FRONT PASSAM O ESPECIFICO UNICO QUE QUEREM CONSULTAR 
> CONFIGURO PARA RECEBER VIA ID DINAMICO >>>> E RECEBO VIA VARIAVEL JSON

query PRODUTO_ENCOMENDA($id: ID!) {
  getProdutoEncomendaApi (id: $id) {
    id
    remetente
    logradouro
    cidade
    estado
    acrescimo
    preco_base
    trivial_preco_final
  }
}

> ENVIO DO FRONT EM VARIAVEIS JSON
{
  "id": "1"
}

---

