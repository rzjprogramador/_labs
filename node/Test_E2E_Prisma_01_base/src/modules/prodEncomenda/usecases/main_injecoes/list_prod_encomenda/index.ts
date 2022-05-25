import { ListProdEncomendas } from '../../implementations/list_prod-encomendas'
import { PrismaProdEncomendaRepository } from '../../repositories/prisma_prod_repository'


export const listProdEncomendaFactory = () => {
  const prodEncomendaRepository = new PrismaProdEncomendaRepository()
  const listProdEncomenda = new ListProdEncomendas(prodEncomendaRepository)

  return listProdEncomenda
}