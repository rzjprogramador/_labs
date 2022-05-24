import { Router, Request, Response} from 'express'

export const routerProdEncomenda = Router()

routerProdEncomenda.get('/encomenda', (req: Request, res: Response) => {
  // res.send('Ola encomenda 2')
  return res.status(201).json({ message: 'Bom Dia'})
})