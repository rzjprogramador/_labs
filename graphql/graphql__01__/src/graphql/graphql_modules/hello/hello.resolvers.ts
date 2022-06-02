// import { hello } from '@/graphql/graphql_modules/hello/methods/create_hello'
import { hello } from './methods/create_hello'

/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    hello,

  },

  // Mutation: {}
  
}
