import { Cliente } from '../../../../domain/modules/cliente/Cliente'

type CreateClienteRequestResolver = {
  nome: string
  email: string
  password: string
  identificador: string
}

export async function createCliente(_: any, args: CreateClienteRequestResolver) {
  console.log(args)
  const newCliente = Cliente.create(args)
  return newCliente
}
