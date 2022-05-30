import { gql } from 'apollo-server'

export const perfil = gql`
  type Perfil {
    id: ID
    cargo: String
  }

  type Query {
    collectionPerfil: [Perfil]
    
  }

`

/*
* DEFINICOES DE PROPRIEDADES DE ENTIDADE && HABILITANDO SEUS COMPORTAMENTOS
* REGISTRAR NO TYPEDEFS CENTRALIZERS QUE É O SCHEMA
*/