import { gql } from 'apollo-server'

export const hello = gql`

# 2 - DEFININDO O OBJETO-ENTIDADE :: QUE É QUE PODE SER CONSULTADO E MODIFICADO

type Hello {
  texto: String
  logico: Boolean
}

# 1 - CONSULTAS QUE PODE FAZER

  type Query { 
      hello: Hello
  }

`
//

