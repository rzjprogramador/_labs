import { makeID } from '../../../../generics/helpers/makes/makeID'
import { MSG } from '../../../../generics/helpers/mensagens/error_mensagens'
import { users_collection_HARD } from '../../../../../inmemory/entities/users/users_collection_hardcode'

export const createUser = (_: any, args: any) => {

  // VERIFICAR SE EXIST
  const { email  } = args
  const exist = users_collection_HARD.some(u => u.email === email)
  if(exist) throw new Error(`${MSG.ERR_EXCEPTION} ${MSG.NOT_REGISTRATION} ${email}`)


  const user = { 
    ...args, id: makeID(), perfil: '2' 
  }

  users_collection_HARD.push(user)

  return user
}
