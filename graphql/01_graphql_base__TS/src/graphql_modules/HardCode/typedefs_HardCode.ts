import { gql } from 'apollo-server'

export const hardCode = gql`

  type Query { 
    # CONSULTAS QUE O CLIENT PODERA FAZER NESTA ENTIDADE
      texto: String
      logico: Boolean
      numeroInteiro: Int
      getUserTest(id: ID!): UserTest!
      getAllUserTest: [UserTest]!

  }


`
//

/**
 * DEFININDO TIPAGENS PARA AS ACOES DO CLIENT QUE PRECISARAM SER RESOLVIDAS
*/