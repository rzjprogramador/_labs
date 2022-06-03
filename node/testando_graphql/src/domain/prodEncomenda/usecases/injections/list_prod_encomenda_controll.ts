import { ListProdEncomendas } from '../implementations/list_prod-encomendas'
import { ProdEncomendaRepositoryPostgresPrisma } from '../repositories/prod_encomenda_repository_postgres_prisma'


export const listProdEncomendaFactory = () => {
  const prodEncomendaRepository = new ProdEncomendaRepositoryPostgresPrisma()
  const listProdEncomenda = new ListProdEncomendas(prodEncomendaRepository)

  return listProdEncomenda
}