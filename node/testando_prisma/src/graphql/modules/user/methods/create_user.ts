import { makeID } from '../../../../generics/helpers/makes/makeID'
import { MSG } from '../../../../generics/helpers/mensagens/error_mensagens'
import { user_collection_HARD } from '../../../../../inmemory/entities/user/user_collection_hardcode'

export const createUser = (_: any, { data }: any) => {
  // VERIFICAR SE EXIST
  const { email } = data
  const exist = user_collection_HARD.some((u) => u.email === email)
  if (exist)
    throw new Error(`${MSG.ERR_EXCEPTION} ${MSG.NOT_REGISTRATION} ${email}`)

  const user = {
    ...data,
    id: makeID(),
    perfil: '2',
  }

  user_collection_HARD.push(user)

  return user
}
