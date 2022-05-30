import { gql } from 'apollo-server'

export const hello = gql`
type Hello {
  texto: String
  logico: Boolean
}

type Query { 
    hello: Hello
}

`

// REGISTRAR NO TYPEDEFS CENTRALIZERS

