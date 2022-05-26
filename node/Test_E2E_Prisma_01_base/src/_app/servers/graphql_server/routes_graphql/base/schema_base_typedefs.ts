import { gql } from 'apollo-server'

export const baseTypeDefs = gql`
type Query {
  base: Boolean # SOMENTE PARA TER UM PONTO DE PARTIDA DE TIPAGEM DE QUERY
}`