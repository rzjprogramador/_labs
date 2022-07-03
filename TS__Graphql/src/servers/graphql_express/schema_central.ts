import { makeExecutableSchema } from 'graphql-tools'

import resolvers from '../routes/routes_graphql/resolvers'
import typeDefs from '../routes/routes_graphql/typeDefs'

// COLECOES DE RESOLVERS E TYPEDEFS APLICACOES GQL
export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
