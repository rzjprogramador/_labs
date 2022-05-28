import { gql } from 'apollo-server'

export const hardCode = gql`

type Query {
    texto: String
    # dadoObjUm: DadoObjUm
  }

  # A ENTIDADE PODE FAZER : CONSULTA :: MODELAR A CONSULTA
  # MODELE O QUE ELA PODE FAZER E RESOLVA NO RESOLVER
  # type Query {
  #   getHello: Hello
  # }


`//