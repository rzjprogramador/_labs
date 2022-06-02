import { collection_Perfil_HARD } from '../../../../../tests_in_memory/entities/perfil/perfis_hardcode'

export const perfil = (user: any) => {
  return collection_Perfil_HARD.find(p => p.id === user.perfil)
}
