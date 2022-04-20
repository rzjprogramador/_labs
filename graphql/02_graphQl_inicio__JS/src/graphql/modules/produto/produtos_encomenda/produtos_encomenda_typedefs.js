import { gql } from 'apollo-server';

export const produtosEncomendaTypeDefs = gql`
  type Query {
    getProdutoEncomendaMARRETADO: ProdutoEncomenda!
    getAllProdutosEncomendaMARRETADO: [ProdutoEncomenda!]!

    getProdutoEncomenda: ProdutoEncomenda!
    getProdutoEncomendaApi(id: ID!): ProdutoEncomenda!

    # getAllProdutosEncomenda: [ProdutoEncomenda!]!
    getAllProdutoEncomendaAPI(
      inputPaginacao: ApiFiltersInput
    ): [ProdutoEncomenda!]!
  }

  type ProdutoEncomenda {
    id: ID!
    indexRef: Int
    remetente: String!
    destinatario: String!
    logradouro: String!
    numero: String!
    complemento: String!
    cidade: String!
    estado: String!
    quantidade: Int!
    preco_base: Float!
    acrescimo: Float!
    desconto: Float!
    trivial_preco_final: Float
  }
`;
