import { gql } from 'apollo-server';

import { userTypeDefs } from '../graphql/modules/user/user_typedefs.js';
import { userResolvers } from '../graphql/modules/user/user_resolvers.js';

import { pedidosTypeDefs } from '../graphql/modules/pedidos/pedidos_typedefs.js';
import { pedidosResolvers } from '../graphql/modules/pedidos/pedidos_resolvers.js';
import { produtoEncomendaResolvers } from './modules/produto/produtos_encomenda/produtos_encomenda_resolvers.js';
import { produtosEncomendaTypeDefs } from './modules/produto/produtos_encomenda/produtos_encomenda_typedefs.js';
import { apiFiltersTypeDefs } from './utils/api_filters/api_filters_typedefs.js';
import { apiFiltersResolversEnum } from './utils/api_filters/api_filters_resolvers.js';

const rootTypeDefs = gql`
  type Query {
    _vazio: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _vazio: () => true,
  },
};

/*
 2- Aqui no schema é o subRoteadorEntidades que sera puxado pelo RoteadorPricipal no server com estes modulos abaixo:

 na exportacao do modulo : Importar e Exportar cada definicao dos modulos tipagens e resolvers das entidades

 */

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  pedidosTypeDefs,
  produtosEncomendaTypeDefs,
  apiFiltersTypeDefs,
];

export const resolvers = [
  rootResolvers,
  userResolvers,
  pedidosResolvers,
  produtoEncomendaResolvers,
  apiFiltersResolversEnum,
];
