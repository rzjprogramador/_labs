import { mergeResolvers } from '@graphql-tools/merge'
import { collection_Perfil_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/perfis_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/

const collectionPerfil = () => {
  return collection_Perfil_HARD
}


/*
* APONTAMENTO DE RESOLVERS
* CENTRALIZAR MODULO NO CENTRALIZERS/RESOLVERS
*/

export default {
  Query: {
    collectionPerfil,

  },

  // Mutation: {}
  
}

