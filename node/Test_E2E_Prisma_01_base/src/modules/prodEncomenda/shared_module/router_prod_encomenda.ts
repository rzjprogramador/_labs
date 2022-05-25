import { Router } from 'express'

import { createProdEncomendaFactory } from '../usecases/main_injecoes/create_prod_encomenda'

export const routerProdEncomenda = Router()

routerProdEncomenda.post('/encomenda', async (req, res) => {
  const { nome, preco } = req.body

  try {
    await createProdEncomendaFactory().execute({ nome, preco })
    return res.status(201).send()
  }
  catch (err: any) {
    return res.status(400).json({
      error: err.message,
    })
  }

})