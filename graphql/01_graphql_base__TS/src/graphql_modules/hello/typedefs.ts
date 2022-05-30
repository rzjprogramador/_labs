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

/*
* DEFINICOES DE PROPRIEDADES DE ENTIDADE && HABILITANDO SEUS COMPORTAMENTOS
* REGISTRAR NO TYPEDEFS CENTRALIZERS QUE É O SCHEMA
*/

