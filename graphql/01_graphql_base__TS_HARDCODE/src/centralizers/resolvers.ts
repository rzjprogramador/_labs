import { produtoResolvers } from '../graphql_modules/produto/resolvers'
import { helloResolvers } from '../graphql_modules/hello/resolvers'
import { userResolvers } from '../graphql_modules/user/resolvers'


// REGISTRO DE RESOLVERS

export const resolvers = [
  helloResolvers,
  userResolvers,
  produtoResolvers,
  
]
