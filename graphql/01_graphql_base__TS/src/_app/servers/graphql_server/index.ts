import { ApolloServer } from 'apollo-server'

import { typeDefs } from '../../../graphql_modules/_centralizers/typedefs'
import { resolvers } from '../../../graphql_modules/_centralizers/resolvers'
import { context } from '../../../graphql_modules/_centralizers/context'


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))


/**
 * SERVER GRAPHQL >> APOLLO_SERVER
*/