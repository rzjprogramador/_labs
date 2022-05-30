import { gql } from 'apollo-server'

export const perfil = gql`

  enum EnumPerfil {
      ADMIN
      USER
      FUNCIONARIO
    }
    
  type Perfil {
    id: ID
    cargo: EnumPerfil
  }

  type Query {
    collectionPerfil: [Perfil]
    
  }

`

/*
* OBS: ENUM NÃO PRECISA DE RESOLVER USE DIRETO COMO VALOR NA TIPAGEM DA ENTIDADE ALVO
* DEFINICOES DE PROPRIEDADES DE ENTIDADE && HABILITANDO SEUS COMPORTAMENTOS
* REGISTRAR NO TYPEDEFS CENTRALIZERS QUE É O SCHEMA
*/

/*
* 
*/