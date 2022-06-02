import '../../../../paths'
import 'module-alias/register'

import { ApolloServer } from 'apollo-server'

import typeDefs  from '../../../centralizers/typedefs'
import resolvers  from '../../../centralizers/resolvers'
import { context } from '../../../centralizers/context'
import { formatErrorControll } from '../../../centralizers/formatError'

// const schema = makeExecutableSchema({ resolvers })

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context,
  formatError: formatErrorControll,
})

server.listen(7777).then(({ url }) => console.log(`SERVER_ON :: ${url}`))


/**
 * SERVER GRAPHQL >> APOLLO_SERVER
*/