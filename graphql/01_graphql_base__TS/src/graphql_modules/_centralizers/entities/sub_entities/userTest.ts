import { gql } from 'apollo-server'

export const userTest = gql`

  type UserTest {
    id: ID
    username: String
    nome: String
    sobrenome: String
  }
`
//

/**
 * 
*/