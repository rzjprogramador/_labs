import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs } from '../../../centralizers/typedefs'
import { resolvers } from '../../../centralizers/resolvers'
import { context } from '../../../centralizers/context'

// const schema = makeExecutableSchema({ resolvers })

const server = new ApolloServer({
  // schema,
  resolvers,
  typeDefs,
  context,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))


/**
 * SERVER GRAPHQL >> APOLLO_SERVER
*/