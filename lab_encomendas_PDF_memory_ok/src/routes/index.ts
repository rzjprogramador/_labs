import { Router } from 'express'
import { produtoEncomendaPdfRoute } from './produto-encomenda-pdf'

export const routes = Router()

/* ROTAS ALL */

routes.use('/v1/produto-encomenda-pdf', produtoEncomendaPdfRoute)
