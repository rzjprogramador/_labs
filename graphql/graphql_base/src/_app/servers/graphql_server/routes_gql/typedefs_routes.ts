import { helloEntityTypeDefs } from '../../../../graphql_modules/typedefs/entities_typedefs/hello.entity.typedefs'
import { olaTypeDefs } from '../../../../graphql_modules/typedefs/ola_typedefs'

// CENTRALIZADOR DE TYPEDEFS

export const typeDefs = [
  helloEntityTypeDefs, olaTypeDefs,
]