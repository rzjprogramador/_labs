import { gql } from 'apollo-server'

export const hello = gql`

type Hello {
    id: ID
    nome: String
    preco: Float
    dadoObjUm: DadoObjUm
  }

`//