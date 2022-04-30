
# CONSULTAS E MUTATION REALIZADAS :: 

# Criar Acao
mutation {
  createAcaos (author: "autor1", description : "Acao3" ) {
    author
    description
    likes
    }
  }

# Consulta todos acao
query {
  acaos {
    _id author description likes
  }
  
}

# Buscar por Id
query {
  acao(id: "611ba2f3c0847c3e44543fce") {
    author description likes
  }
}

# Incrementar dar like
mutation {
  upLikeAcao(id: "611ba2f3c0847c3e44543fce") {
    likes
  }
}

# Decrementar - retirar like dar deslike
mutation{
  downLikeAcao(id: "611ba2f3c0847c3e44543fce") {
    likes
  }
}

# Atualizar Update acao por Id
mutation {
  updateAcao(id: "611ba2f3c0847c3e44543fce",author: "Editado 1" , description: "Jesus -> acao 1") 
  {
    likes author description
  }
}

# Buscar Acao >> Paginados --pagina que estou e quantos quero ter na pagina - viram pelos ultimos

query inventado_GetPaginadosAcao {
  acaos(page: 0, pageSize: 3) {
    acaos {
      _id
      author
      description
      createdAt
      __typename

    }
  }

  
}



---

