import { gql } from 'apollo-server'

export const hardCode = gql`

  type Query { 
    # CONSULTAS QUE O CLIENT PODERA FAZER
      texto: String
      logico: Boolean
      numeroInteiro: Int
      userTest: UserTest

  }


`
//

/**
 * DEFININDO TIPAGENS PARA AS ACOES DO CLIENT QUE PRECISARAM SER RESOLVIDAS
*/