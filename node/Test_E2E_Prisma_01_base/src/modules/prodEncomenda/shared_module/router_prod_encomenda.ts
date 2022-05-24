import { Router, Request, Response} from 'express'

export const routerProdEncomenda = Router()

routerProdEncomenda.get('/encomenda', (req: Request, res: Response) => {
  console.log('Estou no encomendas')
  res.send('Ola encomenda')
})