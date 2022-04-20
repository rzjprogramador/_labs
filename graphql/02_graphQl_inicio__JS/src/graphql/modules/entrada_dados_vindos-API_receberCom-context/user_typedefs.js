import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): User!
    users: [User!]!
  }

  type User {
    id: ID
    nome: String
    email: String
    indexRef: Int
    createdAt: String
    # pedidos: [Pedidos!]!
  }
`;
