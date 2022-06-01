import { makeID } from '../../../utils_gql/makes/makeID'
import { MSG } from '../../../utils_gql/mensagens/error_mensagens'
import { collection_Users_HARD } from '../../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'

export const createUser = (_: any, args: any) => {

  // VERIFICAR SE EXIST
  const { email  } = args
  const exist = collection_Users_HARD.some(u => u.email === email)
  if(exist) throw new Error(`${MSG.ERR_EXCEPTION} ${MSG.NOT_REGISTRATION} ${email}`)


  const user = { 
    ...args, id: makeID(), perfil: '2' 
  }

  collection_Users_HARD.push(user)

  return user
}
