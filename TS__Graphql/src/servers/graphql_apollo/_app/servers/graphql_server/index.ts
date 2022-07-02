import 'module-alias/register'
import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import typeDefs from '../../centralizers/typedefs'
import resolvers from '../../centralizers/resolvers'
import { context } from '../../centralizers/context'
import { formatError } from '../../centralizers/format_error'
import { ENV_PROJETO } from '../../../../../globals/env/enviroments'
const server = new ApolloServer({
  introspection: true,
  resolvers,
  typeDefs,
  context,
  formatError,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

server.listen(4000).then(({ url }) => console.log(`SERVER_ON :: Projeto: ${ENV_PROJETO.NAME} :: ${url}`))

/**
 * SERVER GRAPHQL >> APOLLO_SERVER
 */
