import gql from 'graphql-tag'

export const prodEncomendasTypeDefs = gql`
  
  # CONTRATOS DE TIPOS USADOS
scalar Date

type ProdEncomenda {
  idDB: String
  id: ID
  nome: String!
  preco: float!
  createdAt: Date
}

type Query {
    getAllProdEncomendas(): [ProdEncomenda]!
  }

`
