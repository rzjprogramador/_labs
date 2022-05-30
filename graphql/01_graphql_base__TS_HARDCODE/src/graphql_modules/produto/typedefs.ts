import { gql } from 'apollo-server'

export const produto = gql`
  type Produto {
    id: ID
    nome: String
    preco: Float
  }

  type Query {
    getProduto(id: ID): Produto
    allProduto: [Produto]
  }
`

/*
* DEFINICOES DE PROPRIEDADES DE ENTIDADE && HABILITANDO SEUS COMPORTAMENTOS
* REGISTRAR NO TYPEDEFS CENTRALIZERS QUE É O SCHEMA
* RESOLVER AS QUERYS
*/