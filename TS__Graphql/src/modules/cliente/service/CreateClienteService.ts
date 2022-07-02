import { Cliente } from '@src/modules/cliente/_entity/Cliente'

export async function CreateClienteService(request: Cliente) {
  const { nome, email, password, identificador } = request

  // * REGRAS COM OS CAMPOS DESEMPACOTADOS - ANTES DE SALVAR PODE FAZER AQUI *
  // .. regras.

  const nomeModificado = nome.toUpperCase()

  //

  const newClienteService = await Cliente.create({
    nome: nomeModificado,
    email,
    password,
    identificador,
  })
  return newClienteService
}
