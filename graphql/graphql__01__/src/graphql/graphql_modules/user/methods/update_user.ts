import { collection_Users_HARD } from './../../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'


export const updateUser = (_: any, { id, data}: any) => {
  const userDB = collection_Users_HARD.find(u => u.id === id) 
  const index = collection_Users_HARD.findIndex(i => i.id === id) 

  const newUser = {
    ...userDB,
    ...data
  }
  collection_Users_HARD.splice(index, 1, newUser)

  return newUser
  
}