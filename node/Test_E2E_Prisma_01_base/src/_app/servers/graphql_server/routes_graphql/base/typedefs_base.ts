import { gql } from 'apollo-server'

export const baseTypeDefs = gql`
type Query {
  _base: String # SOMENTE APRA TER UM PONTO DE PARTIDA DE TIPAGEM DE QUERY
}`