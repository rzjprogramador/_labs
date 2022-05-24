import { CreateProdEncomenda } from '../implementations/create/create_prod_encomenda_service'
import { PrismaProdEncomendaRepository } from '../implementations/prisma/prisma_prod_repository'


export const factoryControleProdEncomenda = () => {
  const prodEncomendaRepository = new PrismaProdEncomendaRepository() // COMUNICANDO COM O BANCO
  const createProdEncomenda = new CreateProdEncomenda(prodEncomendaRepository)

  return createProdEncomenda
}