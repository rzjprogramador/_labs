import { ClienteRepositoryInMemory } from '@src/modules/cliente/repo_inmemory/ClienteRepositoryInMemory'

// REPOSITORIOS DISPONIVEIS
const repositorys = {
  repoPostgres: '...',
  repoInMemory: new ClienteRepositoryInMemory(),
}

// POLO UNICO REPOSITORIO EM USO
export const repositoryObject = {
  use: repositorys.repoInMemory, // >> MUDE AQUI
}
