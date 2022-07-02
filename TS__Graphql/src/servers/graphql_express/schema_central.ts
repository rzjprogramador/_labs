import { makeExecutableSchema } from 'graphql-tools'

import resolvers from '../routes/graphql/resolvers'
import typeDefs from '../routes/graphql/typeDefs'

// COLECOES DE RESOLVERS E TYPEDEFS APLICACOES GQL
export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})
