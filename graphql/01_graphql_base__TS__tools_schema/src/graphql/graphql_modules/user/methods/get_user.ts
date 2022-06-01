import { collection_Users_HARD } from '../../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'

export const getUser = (_: any, args: any) => {
  const { id, email } = args

  if(id) {
    return collection_Users_HARD.find(user => user.id === id)
  }
  if(email) {
    return collection_Users_HARD.find(user => user.email === email)
  }
}

//

export const allUsers = () => collection_Users_HARD