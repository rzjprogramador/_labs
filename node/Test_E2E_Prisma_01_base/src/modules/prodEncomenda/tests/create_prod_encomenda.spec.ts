import { CreateProdEncomenda } from '../services/create_prod_encomenda_service'
import { InMemoryPrismaProdEncomendaRepository } from '../../../../tests_in_memory/repositories/inmemory_prodencomenda_repositories'

describe('ProdEncomenda', () => {

  test('Criar novo ProdEncomenda', async () => {
    // FAÇO A INVERSAO DE DEPENNCIA NORMAL E DOU PARA OS ERVICO O REPO INMEMORY

    const inMemoryPrismaProdEncomendaRepository = new InMemoryPrismaProdEncomendaRepository()

    const createProdEncomenda = new CreateProdEncomenda(inMemoryPrismaProdEncomendaRepository)

    // TESTANDO SE NAO RETORNOU ERRO DE EXCESAO NA CRIACAO 
    // SUCESSO:: ESPERO QUE A RESOLUCAO DA PROMESSA NAO DISPARE NENHUM ERRO
    await expect(createProdEncomenda.execute({ nome: 'prod_encomenda_01', preco: 15 }))
    .resolves
    .not
    .toThrow()

    // QUE A ACAO NESTE ARRAY DO REPO INMEMORIA SEJA : UM ARRAY QUE TENHA O OBJETO DA ENTIDADE CRIADO  COM OS DADOS CORRETOS PASSADOS ACIMA NA CRIACAO DESTE DE TEST

  await expect(inMemoryPrismaProdEncomendaRepository.items).toEqual(expect.arrayContaining([
    expect.objectContaining({
      nome: 'prod_encomenda_01', preco: 15  
    })
  
  ]))

  })

  


})