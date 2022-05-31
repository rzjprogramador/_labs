import { produtoResolvers } from '../graphql_modules/produto/produto.resolvers'
import { helloResolvers } from '../graphql_modules/hello/hello.resolvers'
import { userResolvers } from '../graphql_modules/user/user.resolvers'
import { perfilResolvers } from '../graphql_modules/perfil/perfil.resolvers'


// REGISTRO DE RESOLVERS

export const resolvers = [
  helloResolvers,
  userResolvers,
  perfilResolvers,
  produtoResolvers,
  
]

/*
TENTANDO MERGIAR AUTOMATICAMENTE RESOLVERS
*
import { loadFilesSync } from '@graphql-tools/load-files'
import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'

const resolversFiles = loadFilesSync(path.join(__dirname, '....

export const resolvers = mergeResolvers(resolversFiles)

*/
