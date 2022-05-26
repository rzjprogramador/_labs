import { baseResolvers } from './base/resolver_base'
import { prodEncomendaResolvers } from '../../../../modules/prodEncomenda/shared_module/graphql_shared/resolvers/prod_encomenda_resolvers'

// CENTRALIZACAO DE RESOLVERS DA APP

export const resolvers = [
  baseResolvers,
  prodEncomendaResolvers,
]