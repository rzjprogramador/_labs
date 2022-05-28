import { gql } from 'apollo-server';

export const dadosInternoDoisTypeDefs = gql`
  type Query {
    dadoInternoDois: DadoInternoDois
    dadoInternoDoisAll: [DadoInternoDois!]!
  }

  type DadoInternoDois {
    id: ID
    texto: String
    numero: Int
  }
`;
