import { gql } from 'apollo-server';

export const pedidosTypeDefs = gql`
  type Query {
    pedido: Pedidos!
    pedidos: [Pedidos!]!
  }

  type Pedidos {
    id: ID
    preco: Float
    indexRef: Int
    createdAt: String
    # usuario: User!
    # produto: Produto!
  }
`;

/*
Relacoes: Chave Estrangeiras : Onde esta chamando para extender um tipo "TEM" de outra Entidade quer dizer "PERTENCE".
Se na base de dados esta entidade_id no type pode definir como entidade que é a forma correta de fazer a relacao.

*/
