import { gql } from 'apollo-server'

export const olaTypeDefs = gql`
# TIPO CUSTOMIZADO
  type Hello {
    id: ID
    nome: String
    preco: Float
  }

  # TODAS CONSULTAS QUE POSSO FAZER
  type Query {
    ola: String
    hello: Hello
  }

  # FUNCOES QUE POSSO FAZER
  # type Mutation {
  #   # createHello(hello: Hello): Hello
  # }
`
//