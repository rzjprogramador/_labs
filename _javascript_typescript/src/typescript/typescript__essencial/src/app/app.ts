import cors from 'cors'
import express from 'express'
import logger from 'morgan'

import { router } from '../routes'

// CRIAR APP E EXPORTA-LO COMO PRINCIPAL
export const app = express()

// MIDDLEWARES
app.use(express.json())
// app.use(logger('dev'))   /*  Mostra no log que estao tentando acessar a aplicacao  */
app.use('/v1/', router) /* Integrar o roteador ao app*/

// CORS - PERMISSOES DE ACESSOS A API
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})
