import { collection_Users_HARD } from '../../utils_gql/hardcoders/objetos_helpers/usuarios_hardcode'


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

  // Mutation: {}
  
}