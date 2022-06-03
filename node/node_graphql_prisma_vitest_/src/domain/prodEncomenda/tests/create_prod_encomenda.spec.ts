import { CreateProdEncomenda } from '../usecases/implementations/create_prod_encomenda_service'
import { ProdEncomendaRepositoryInMemory } from '../../../../inmemory/entities/prod_encomenda/prod_encomenda_repository_inmemory'

describe('ProdEncomenda', () => {

  test('SUCESSO: Criar novo ProdEncomenda', async () => {
    // FAÇO A INVERSAO DE DEPENNCIA NORMAL E DOU PARA OS ERVICO O REPO INMEMORY

    const prodEncomendaRepositoryInMemory = new ProdEncomendaRepositoryInMemory()

    const createProdEncomenda = new CreateProdEncomenda(prodEncomendaRepositoryInMemory)

    // TESTANDO SE NAO RETORNOU ERRO DE EXCESAO NA CRIACAO 
    // SUCESSO:: ESPERO QUE A RESOLUCAO DA PROMESSA NAO DISPARE NENHUM ERRO
    await expect(createProdEncomenda.execute({ nome: 'prod_encomenda_01', preco: 15 }))
    .resolves
    .not
    .toThrow()

    // VERIFICANDO SE CRIOU CORRETAMENTE DENTRO DO ARRAY INMEMORY O OBJETO DA ENTIDADE

  expect(prodEncomendaRepositoryInMemory.items).toEqual(expect.arrayContaining([
    expect.objectContaining({ nome: 'prod_encomenda_01', preco: 15 }) 
  ]))

  }) // 
 

  test('FALHA: Não Criar novo ProdEncomenda com nome invalido', async () => {

    const prodEncomendaRepositoryInMemory = new ProdEncomendaRepositoryInMemory()
    const createProdEncomenda = new CreateProdEncomenda(prodEncomendaRepositoryInMemory)

    await expect(createProdEncomenda.execute({ nome: '', preco: 15 }))
    .rejects
    .toThrow()

    // É PRA FALHAR - ENTÃO CAPTURO COM REJECTS -- ESPERO QUE MEU ARRAY ESTEJA VAZIO SE O NOME NÃO FOR IGUAL OA PASSADO -- É PRA NAO CRIAR NADA

   expect(prodEncomendaRepositoryInMemory.items).toEqual(expect.arrayContaining([ ]))

  }) // 


})