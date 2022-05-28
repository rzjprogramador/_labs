import { gql } from 'apollo-server';

export const dadosInternosTypeDefs = gql`
  type Query {
    interno1: Interno1
    internos1: [Interno1!]!
  }

  type Interno1 {
    id: ID
    texto: String
    numero: Int
    decimal: Float
    logico: Boolean
  }
`;
