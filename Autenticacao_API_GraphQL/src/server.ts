import 'module-alias/register'
import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'

import schema from './schemas'

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const context = {
      req,
      token: req?.headers?.authorization,
    }

    return context
  },
})

server.listen({ port: 4000 }, () => console.log('SERVER_ON => 4000'))
