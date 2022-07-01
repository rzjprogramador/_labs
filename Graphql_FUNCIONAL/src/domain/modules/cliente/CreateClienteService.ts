import { Cliente } from '@src/domain/modules/cliente/Cliente'

export async function CreateClienteService(request: Cliente) {
  const { nome, email, password, identificador } = request

  // * REGRAS COM OS CAMPOS DESEMPACOTADOS - ANTES DE SALVAR PODE FAZER AQUI *
  // .. regras
  //

  const newClienteService = await Cliente.create({ nome, email, password, identificador })
  return newClienteService
}
