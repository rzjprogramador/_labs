import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!, teste: String): User!
    users(inputPaginacao: ApiFiltersInput): [User!]!
  }

  type User {
    id: ID
    nome: String
    email: String
    indexRef: Int
    createdAt: String
    # pedidos: [Pedidos!]!
    campo_Resultado_Operacao_Trivial_Entre_Campos: String # para resolver trivial resolvendo campos do tipo
  }
`;
