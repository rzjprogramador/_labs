import { PedidoRepositoryInMemory } from '@src/modules/pedido/repo_inmemory/PedidoRepositoryInMemory'

// REPOSITORIOS DISPONIVEIS
const repositorys = {
  repoPostgres: '...',
  repoInMemory: new PedidoRepositoryInMemory(),
}

// POLO UNICO REPOSITORIO EM USO
export const repositoryObject = {
  use: repositorys.repoInMemory, // >> MUDE AQUI
}
