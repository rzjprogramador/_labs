import request from 'supertest'

import { app } from './servers/express_server/app'
// import { routes } from './routes'


describe('SuperTest E2E', () => {
 
  test('[e2e] Criacao ProdEncomenda', async () => {
  const response = await request(app).post('/encomenda').send(
    { nome: 'prod_encomenda_01', preco: 15 }
    )

  expect(response.status).toBe(201);
  expect(response.body.error).toBeFalsy();

}, 100000)

})