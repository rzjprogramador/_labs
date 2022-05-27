import { gql } from 'apollo-server'

export const helloEntityTypeDefs = gql`
# TIPO CUSTOMIZADO
type Hello {
    id: ID
    nome: String
    preco: Float
  }
`
//