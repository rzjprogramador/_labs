// import { createClienteInjectControll } from '@src/connections/injections/cliente/create_cliente_inject_controll'
import { createClienteInjectControll } from '../../../../../src/connections/injections/cliente/create_cliente_inject_controll'
import { Cliente } from '@src/domain/entities/participante/cliente/entity/cliente'
// import { IClienteRequest } from '@src/domain/entities/participante/cliente/contracts/cliente_dto'

type CreateClienteRequestResolver = Cliente

export async function createCliente(_: any, args: CreateClienteRequestResolver) {
  const { nome, email, password, identificador } = args
  console.log(args)

  const cliente = await createClienteInjectControll().execute({ nome, email, password, identificador })
  return cliente
}
