import { CreateProdEncomenda } from '../services/create_prod_encomenda_service'
import { InMemoryPrismaProdEncomendaRepository } from '../../../../tests_in_memory/repositories/inmemory_prodencomenda_repositories'

describe('ProdEncomenda', () => {

  test('SUCESSO: Criar novo ProdEncomenda', async () => {
    // FAÇO A INVERSAO DE DEPENNCIA NORMAL E DOU PARA OS ERVICO O REPO INMEMORY

    const inMemoryPrismaProdEncomendaRepository = new InMemoryPrismaProdEncomendaRepository()

    const createProdEncomenda = new CreateProdEncomenda(inMemoryPrismaProdEncomendaRepository)

    // TESTANDO SE NAO RETORNOU ERRO DE EXCESAO NA CRIACAO 
    // SUCESSO:: ESPERO QUE A RESOLUCAO DA PROMESSA NAO DISPARE NENHUM ERRO
    await expect(createProdEncomenda.execute({ nome: 'prod_encomenda_01', preco: 15 }))
    .resolves
    .not
    .toThrow()

    // VERIFICANDO SE CRIOU CORRETAMENTE DENTRO DO ARRAY INMEMORY O OBJETO DA ENTIDADE

  await expect(inMemoryPrismaProdEncomendaRepository.items).toEqual(expect.arrayContaining([
    expect.objectContaining({
      nome: 'prod_encomenda_01', preco: 15  
    }) 
  ]))

  }) // 
 

  test('FALHA: Não Criar novo ProdEncomenda com nome invalido', async () => {

    const inMemoryPrismaProdEncomendaRepository = new InMemoryPrismaProdEncomendaRepository()
    const createProdEncomenda = new CreateProdEncomenda(inMemoryPrismaProdEncomendaRepository)

    await expect(createProdEncomenda.execute({ nome: '', preco: 15 }))
    .rejects
    .toThrow()

    // É PRA FALHAR - ENTÃO CAPTURO COM REJECTS -- ESPERO QUE MEU ARRAY ESTEJA VAZIO SE O NOME NÃO FOR IGUAL OA PASSADO -- É PRA NAO CRIAR NADA

   expect(inMemoryPrismaProdEncomendaRepository.items).toEqual(expect.arrayContaining([ ]))

  }) // 


})