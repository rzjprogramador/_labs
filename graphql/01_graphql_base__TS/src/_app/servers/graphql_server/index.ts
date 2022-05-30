import { ApolloServer } from 'apollo-server'

import { typeDefs } from '../../../_centralizers/typedefs'
import { resolvers } from '../../../_centralizers/resolvers'
import { context } from '../../../_centralizers/context'


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))


/**
 * SERVER GRAPHQL >> APOLLO_SERVER
*/