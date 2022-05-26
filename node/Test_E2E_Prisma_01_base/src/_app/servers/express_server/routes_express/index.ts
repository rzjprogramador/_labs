import { routerProdEncomenda } from '../../../../modules/prodEncomenda/shared_module/express_shared_routes/router_prod_encomenda'
import { Router } from 'express'
// import { rota_desacoplada_express } from '../../modules/prodEncomenda/shared_module/rota_desacoplada_express'


export const routes = Router()

// IMPORTAR NESTE CENTRALIZADOR TODAS AS ROTAS DE CONTEXTO
routes.use(routerProdEncomenda)
// routes.use(rota_desacoplada_express)