import { gql } from 'apollo-server'

export const user = gql`
  type User {
    id: ID
    nome: String
    email: String
    password: String
  }

  type Query {
    getUser(id: ID, email: String): User
    allUsers: [User]
  }

`

/*
* DEFINICOES DE PROPRIEDADES DE ENTIDADE && HABILITANDO SEUS COMPORTAMENTOS
* REGISTRAR NO TYPEDEFS CENTRALIZERS QUE É O SCHEMA
*/