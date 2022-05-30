import { collection_Perfil_HARD } from '../../use/hardcoders/repositorios_hardcode/perfis_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/

const collectionPerfil = () => {
  return collection_Perfil_HARD
}


/*
* APONTAMENTO DE RESOLVERS
* REGISTRAR NO RESOLVERS CENTRALIZERS
*/

export const perfilResolvers = {
  Query: {
    collectionPerfil,

  },

  // Mutation: {}
  
}