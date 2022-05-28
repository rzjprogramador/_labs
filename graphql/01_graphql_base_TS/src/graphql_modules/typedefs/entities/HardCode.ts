import { gql } from 'apollo-server'

export const hardCode = gql`

# CONSULTAS QUE A ENTIDADE PODE FAZER

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