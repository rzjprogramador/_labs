import 'reflect-metadata'
import 'module-alias/register'

import express from 'express'

import { routes } from '../routes/routes_express/routes'
import { appErrors } from './app_errors'
import { graphqlRoute } from '../graphql_express/app_graphql_route'

export const app = express()

app.use(express.json())

app.use(routes)

app.use('/graphql', graphqlRoute) // NOME DA ROTA UNICA GRAPHQL PARA O NAVEGADOR

app.use(appErrors)
