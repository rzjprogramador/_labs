import { Express, Router } from 'express'
import { readdirSync } from 'fs'

const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/api', router) // PREFIXO PARA TODAS ROTAS
  readdirSync(`${__dirname}/../routes`).map(async fileName => {
    (await import (`../routes/${fileName}`)).default(router)
  })
}

export { setupRoutes }

/*
* VAI CRIAR DINAMICAMENTE A IMPORTACAO DE CADA ROTA
*/