import { perfil } from './methods/perfil'
import { getUser, allUsers } from './methods/get_user'
import { createUser } from './methods/create_user'
import { updateUser } from './methods/update_user'
import { deleteUser } from './methods/delete_user'

/*
* EXPORT REFERENCIAS RESOLVERS
*/

export default {
  Query: {
    getUser,
    allUsers,
  },
  
  User: {
    perfil, // RESOLVER TRIVIAL : CAMPO QUE A QUERY NAO CONSEGUE RESOLVER
  },
    

  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
}
//
