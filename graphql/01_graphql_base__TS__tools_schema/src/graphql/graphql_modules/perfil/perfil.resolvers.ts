import { collection_Perfil_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/perfis_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICACOES
*/

const collectionPerfil = () => {
  return collection_Perfil_HARD
}


/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    collectionPerfil,

  },

  // Mutation: {}
  
}

