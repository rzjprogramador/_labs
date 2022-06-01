import { baseTypeDefs } from './base/schema_base_typedefs'
import { prodEncomendaUseCaseTypes } from '../../../../modules/prodEncomenda/shared_module/graphql_shared/type_defs/prod_encomenda_usecases_typedefs'
import { helloUseCasesTypeDefs } from '../../../../modules/hello/graphql_module/typedefs/hello_usecases_typedefs'

// TYPESDEFS
// CENTRALIZACAO DE TYPEDEFS TIPAGENS DOS RESOLVERS DA APP

export const typeDefs = [
  baseTypeDefs,
  prodEncomendaUseCaseTypes,
  helloUseCasesTypeDefs,
]

// TEMP
