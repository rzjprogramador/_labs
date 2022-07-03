import { createPedidoInject } from '@src/modules/pedido/injects/CreatePedidoInject'

type CreatePedidoRequestResolver = {
  input: CreatePedidoInput
}
type CreatePedidoInput = {
  quantidade: number
  endereco: string
}

export async function createPedido(_: any, { input }: CreatePedidoRequestResolver) {
  const createPedido = await createPedidoInject().execute(input)
  return createPedido
}
