import { ApolloServer } from 'apollo-server'

import { typeDefs } from './routes_gql/typedefs_routes'
import { resolvers } from './routes_gql/resolvers_routes'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))