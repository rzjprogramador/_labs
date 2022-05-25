import { CreateProdEncomenda } from '../../implementations/create_prod_encomenda_service'
import { PrismaProdEncomendaRepository } from '../../repositories/prisma_prod_repository'


export const createProdEncomendaFactory = () => {
  const prodEncomendaRepository = new PrismaProdEncomendaRepository() // COMUNICANDO COM O BANCO
  const createProdEncomenda = new CreateProdEncomenda(prodEncomendaRepository)

  return createProdEncomenda
}