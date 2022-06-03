import { CreateProdEncomenda } from '../implementations/create_prod_encomenda_service'
import { ProdEncomendaRepositoryPostgresPrisma } from '../repositories/prod_encomenda_repository_postgres_prisma'


export const createProdEncomendaFactory = () => {
  const prodEncomendaRepository = new ProdEncomendaRepositoryPostgresPrisma() // COMUNICANDO COM O BANCO
  const createProdEncomenda = new CreateProdEncomenda(prodEncomendaRepository)

  return createProdEncomenda
}