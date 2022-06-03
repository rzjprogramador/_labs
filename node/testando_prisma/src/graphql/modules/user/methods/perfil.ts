import { perfil_collection_HARD } from '../../../../../inmemory/entities/perfil/perfis_collection_hardcode'

export const perfil = (user: any) => {
  return perfil_collection_HARD.find(p => p.id === user.perfil)
}
