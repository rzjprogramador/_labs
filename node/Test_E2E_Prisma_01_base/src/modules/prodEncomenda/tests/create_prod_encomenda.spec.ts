import { CreateProdEncomenda } from '../services/create_prod_encomenda_service'

describe('ProdEncomenda', () => {

  test('Criar novo ProdEncomenda', async () => {

    const createProdEncomenda = new CreateProdEncomenda({
      create: async (data) => {} 
    })

    // TESTANDO SE NAO RETORNOU ERRO DE EXCESAO NA CRIACAO 
    // SUCESSO:: ESPERO QUE A RESOLUCAO DA PROMESSA NAO DISPARE NENHUM ERRO
    await expect(createProdEncomenda.execute({ nome: 'prod_encomenda_01', preco: 15 }))
    .resolves
    .not
    .toThrow()

  })

})