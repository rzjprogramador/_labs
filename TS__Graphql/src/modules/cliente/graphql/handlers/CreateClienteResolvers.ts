import { createClienteInject } from '@src/modules/cliente/injects/CreateClienteInject'
import { CreateClienteService } from '@src/modules/cliente/service/CreateClienteService'

type CreateClienteRequestResolver = {
  input: CreateClienteInput
}
type CreateClienteInput = {
  nome: string
  email: string
  password: string
  identificador: string
}

export async function createCliente(_: any, { input }: CreateClienteRequestResolver) {
  const createCliente = await createClienteInject().execute(input)
  return createCliente
}
