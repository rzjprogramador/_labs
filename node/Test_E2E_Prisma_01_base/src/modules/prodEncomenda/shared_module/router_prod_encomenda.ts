import { Router, Request, Response} from 'express'

export const routerProdEncomenda = Router()

routerProdEncomenda.get('/encomenda', (req: Request, res: Response) => {
  res.send('Ola encomenda 2')
})