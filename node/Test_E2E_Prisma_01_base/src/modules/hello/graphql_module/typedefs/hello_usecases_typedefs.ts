
import { gql } from 'apollo-server'

export const helloUseCasesTypeDefs = gql`

# ENTIDADE HELLO
type Hello {
  idDB: String
  id: ID
  nome: String!
  preco: Float!
}

# CONSULTA DA ENTIDADE QUE PODE FAZER

  type Query {
    allHellos: [Hello!]
    getHello: (id: ID): Hello
  }

# CRIACAO DA ENTIDADE QUE PODE FAZER

  type Mutation {
    createHello: (data: Hello): Hello
  }


`
//