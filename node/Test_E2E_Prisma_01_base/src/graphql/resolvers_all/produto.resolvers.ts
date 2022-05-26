// import { ProdEncomenda } from '../entity/ProdEncomenda.entity'
import { listProdEncomendaFactory } from '../../modules/prodEncomenda/usecases/main_injecoes/list_prod_encomenda'

const getAllProdEncomendas = () =>  listProdEncomendaFactory().execute()

export const produtoResolvers = {
  Query: {
    getAllProdEncomendas,
  },
  Mutation: {}
}