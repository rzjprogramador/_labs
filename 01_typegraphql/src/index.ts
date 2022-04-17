import path from 'path'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

async function main () {
  const schema = await buildSchema({
    resolvers: [],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()
  console.log(`SERVER ON IN ${ url }`)
}

main()