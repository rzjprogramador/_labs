import { ApolloServer } from 'apollo-server'

import { typeDefs } from './routes_gql/typedefs_routes'
import { resolvers } from './routes_gql/resolvers_routes'
import { context } from './routes_gql/context'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))


/**
 * SERVER GRAPHQL >> APOLLO_SERVER
*/