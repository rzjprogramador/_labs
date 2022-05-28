import { gql } from 'apollo-server'

export const olaTypeDefs = gql`
# OBS: OS TIPOS CUSTOMIZADOS ESTAO NA PASTA DE ENTITIES TYPEDEFS

  # TODAS CONSULTAS QUE POSSO FAZER
  type Query {
    ola: String
    hello: Hello
  }

  # FUNCOES QUE POSSO FAZER
  type Mutation {
    createHello(hello: Hello): Hello
  }
`
//