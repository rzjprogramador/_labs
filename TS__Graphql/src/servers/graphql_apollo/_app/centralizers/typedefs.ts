import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

const typeDefs = loadSchemaSync('./**/*.gql', {
  loaders: [new GraphQLFileLoader()],
})

// console.log(typeDefs)

export default typeDefs
