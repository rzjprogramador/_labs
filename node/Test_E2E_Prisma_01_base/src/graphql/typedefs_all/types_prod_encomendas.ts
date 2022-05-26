import gql from 'graphql-tag'

export const prodEncomendasTypeDefs = gql`
  
  # CONTRATOS DE TIPOS USADOS
scalar Date
type Mutation {
  _empty: String
}

type Subscription {
  _empty: String
}

type ProdEncomenda {
  idDB: String
  id: ID
  nome: String!
  preco: float!
  createdAt: Date
}

type Query {
    getAllProdEncomendas: [ProdEncomenda]!
  }

`
