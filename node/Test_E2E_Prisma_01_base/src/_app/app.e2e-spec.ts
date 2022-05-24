import request from 'supertest'
import { app } from './app'

test('[e2e] Criacao ProdEncomenda', async () => {
  const response = await request(app)
    .post('/encomenda')
    .send({ nome: 'prod_encomenda_01', preco: 15 })

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();
})