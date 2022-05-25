import typeDefs  from './typedefs'
import { resolvers } from './resolvers'

// ESTE SERA USADO PELO MIDLE GRAPHQL
const schema = {
  resolvers,
  typeDefs
}

export default schema