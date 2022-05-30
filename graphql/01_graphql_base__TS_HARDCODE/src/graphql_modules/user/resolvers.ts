import { collection_Users_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'
import { collection_Perfil_HARD } from '../generics_graphql/hardcoders/repositorios_hardcode/perfis_hardcode'

/*
* METODOS RESOLVEDORES DE CONSULTA E MODIFICAOES :: REFERENCIAR NO EXPORTADOR 
*/

const getUser = (_: any, args: any) => {
  const { id, email } = args

  if(id) {
    return collection_Users_HARD.find(user => user.id === id)
  }
  if(email) {
    return collection_Users_HARD.find(user => user.email === email)
  }
}


/*
* APONTAMENTO DE RESOLVERS
* REGISTRAR NO RESOLVERS CENTRALIZERS
*/

export const userResolvers = {
  Query: {
    getUser,

  },
  
  // RESOLVER TRIVIAL : CAMPO QUE A QUERY NAO CONSEGUE RESOLVER
  User: {
    perfil: (user: any) => {
      return collection_Perfil_HARD.find(p => p.id === user.perfil)
    }
  }

  // Mutation: {}
  
}