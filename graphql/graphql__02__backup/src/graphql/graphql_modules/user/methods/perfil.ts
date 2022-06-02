import { collection_Perfil_HARD } from './../../generics_graphql/hardcoders/repositorios_hardcode/perfis_hardcode'

export const perfil = (user: any) => {
  return collection_Perfil_HARD.find(p => p.id === user.perfil)
}
