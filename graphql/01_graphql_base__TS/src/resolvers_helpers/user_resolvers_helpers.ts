import { collection_Users_HARD } from '../utils_gql/hardcoders/objetos_helpers/usuarios_hardcode'


export const getUser = (_: any, args: any) => {
  const { id, email } = args

  if(id) {
    return collection_Users_HARD.find(user => user.id === id)
  }
  if(email) {
    return collection_Users_HARD.find(user => user.email === email)
  }
}


/*
* REGISTRAR NO OBJETO RESOLVERS DA ENTIDADE
*
*/