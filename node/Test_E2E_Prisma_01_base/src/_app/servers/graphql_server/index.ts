import { ApolloServer } from 'apollo-server'

import { typeDefs } from './routes_graphql/type_defs'
import { resolvers } from './routes_graphql/resolvers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))