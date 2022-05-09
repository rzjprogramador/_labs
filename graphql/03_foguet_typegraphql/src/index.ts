import "reflect-metadata"

import path from 'path'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

import { UserResolvers } from './core/entities/users/resolvers/user_resolver'

async function main () {
  const schema = await buildSchema({
    resolvers: [UserResolvers],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen({
    port: 7777,
  })
  console.log(`SERVER-ON ${ url }`)
}

main()