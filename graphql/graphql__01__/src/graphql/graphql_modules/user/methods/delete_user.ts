import { collection_Users_HARD } from '../../generics_graphql/hardcoders/repositorios_hardcode/usuarios_hardcode'

export const deleteUser = (_: any, { id }: any) => {
  const userEncontrado = collection_Users_HARD.find(u => u.id === id) 

  let userBD = { ...collection_Users_HARD }

  userBD = collection_Users_HARD.filter(u => u.id !== id)

  return !!userEncontrado
}