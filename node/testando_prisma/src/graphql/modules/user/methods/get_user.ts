import { users_collection_HARD } from '../../../../../inmemory/entities/user/user_collection_hardcode'

export const getUser = (_: any, args: any) => {
  const { id, email } = args

  if(id) {
    return users_collection_HARD.find(user => user.id === id)
  }
  if(email) {
    return users_collection_HARD.find(user => user.email === email)
  }
}

//

export const allUsers = () => users_collection_HARD