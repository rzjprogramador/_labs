import { clientesRoutes } from '@src/servers/routes/express/routes_app/ClientesRoutes'
import { pedidosRoutes } from '@src/servers/routes/express/routes_app/PedidosRoutes'

// CENTRAL COLECOES DE ROTAS
export const routes = [clientesRoutes, pedidosRoutes]
