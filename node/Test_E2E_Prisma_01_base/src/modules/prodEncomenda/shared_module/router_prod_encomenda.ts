import { Router, Request, Response} from 'express'

import { HttpRequest, HttpResponse } from '../../../generics_app/protocols/http_protocol'

export const routerProdEncomenda = Router()

routerProdEncomenda.get('/encomenda', (req: Request, res: Response) => {

  return res.status(201).json({ message: 'Bom Dia'})

})