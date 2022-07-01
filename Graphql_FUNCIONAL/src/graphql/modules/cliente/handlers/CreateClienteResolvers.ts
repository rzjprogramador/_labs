import { CreateClienteService } from '@src/domain/modules/cliente/CreateClienteService'

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
  const { nome, email, password, identificador } = input
  const newCliente = await CreateClienteService({ nome, email, password, identificador })
  return newCliente
}
