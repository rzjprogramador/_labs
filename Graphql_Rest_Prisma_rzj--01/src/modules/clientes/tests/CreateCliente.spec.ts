import { describe, it, expect, beforeAll } from 'vitest'

import { ClienteRepositoryInMemory } from '@src/modules/clientes/repositories/inmemory/ClienteRepositoryInMemory'
import { CreateClienteService } from '@src/modules/clientes/services/CreateClienteService'
import { Cliente } from '@src/models/Cliente'
import { IClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'
import { MSG_EXCEPTION } from '@src/globals/message/messages'

describe('Cliente', () => {
  let clientesRepository: IClientesRepository
  let createClienteService: CreateClienteService

  beforeAll(() => {
    clientesRepository = new ClienteRepositoryInMemory()
    createClienteService = new CreateClienteService(clientesRepository)
  })

  it(`deve criar Cliente [Testando o Service CreateCliente]`, async () => {
    const clienteData: Cliente = {
      nome: 'testNome',
      email: 'testEmail',
      password: 'testPassword',
      identificador: 'testIdentificador',
    }

    const newCliente = await createClienteService.execute(clienteData)
    console.log(newCliente)

    expect(newCliente).toHaveProperty('id')
    expect(newCliente.email).toBe('testEmail')
  })

  it(`nao deve criar Cliente se o cliente ja existir [Testando o Service CreateCliente]`, async () => {
    const clienteData: Cliente = {
      nome: 'testExistNome',
      email: 'testExistEmail',
      password: 'testExistPassword',
      identificador: 'testExistIdentificador',
    }

    // ESTA FUNCAO DE CRIACAO SERA CHAMADA 2 VEZES E TEM QUE SER REJEITADA E A REJEICAO IGUAL A MENSAGEM
    await createClienteService.execute(clienteData)

    expect(createClienteService.execute(clienteData)).rejects.toEqual(new Error(MSG_EXCEPTION.INCORRECT))
  })
})
