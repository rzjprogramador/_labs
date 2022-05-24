import { routerProdEncomenda } from '../modules/prodEncomenda/shared_module/router_prod_encomenda'
import { Router } from 'express'


export const routes = Router()

// EXPORT TODOS CENTRALIZADORES DE ROTAS
routes.use(routerProdEncomenda)