import { Router, Request, Response} from 'express'
// import { HttpRequest, HttpResponse } from '../../../generics_app/protocols/http_protocol'

import { factoryControleProdEncomenda } from '../repositories/main_injecoes'

export const routerProdEncomenda = Router()

routerProdEncomenda.post('/encomenda', async (req: Request, res: Response) => {
  const { nome, preco } = req.body

  try{
    await factoryControleProdEncomenda().execute({ nome, preco })
    return res.status(200).send()
  }
  catch(error: any) {
    res.status(400).json({
      error: error.message,
    })
  }

})