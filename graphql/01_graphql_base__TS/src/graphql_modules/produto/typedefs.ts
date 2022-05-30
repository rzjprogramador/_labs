import { gql } from 'apollo-server'

export const produto = gql`
  type Produto {
    id: ID
    nome: String
    preco: Float
  }

  type Query {
    getProduto: Produto
    allProduto: [Produto]
  }
`

// REGISTRAR NO TYPEDEFS CENTRALIZERS