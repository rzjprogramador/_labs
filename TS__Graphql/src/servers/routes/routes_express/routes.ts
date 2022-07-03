import { clientesRoutes } from '@src/servers/routes/routes_express/ClientesRoutes'
import { pedidosRoutes } from '@src/servers/routes/routes_express/PedidosRoutes'

// CENTRAL COLECOES DE ROTAS
export const routes = [clientesRoutes, pedidosRoutes]
