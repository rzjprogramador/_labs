import { Router } from 'express'
import { clientesRoutes } from '@src/servers/routes/express/cliente_routes/ClientesRoutes'

// CENTRAL COLECOES DE ROTAS
export const routes = [clientesRoutes]
