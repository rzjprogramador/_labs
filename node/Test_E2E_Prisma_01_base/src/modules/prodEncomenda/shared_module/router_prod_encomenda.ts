import { Router } from 'express'

import { factoryControleProdEncomenda } from '../repositories/main_injecoes'

export const routerProdEncomenda = Router()

routerProdEncomenda.post('/encomenda', async (req, res) => {
  const { nome, preco } = req.body

  try {
    await factoryControleProdEncomenda().execute({ nome, preco })
    return res.status(201).send()
  }
  catch (err: any) {
    return res.status(400).json({
      error: err.message,
    })
  }

})