import { Cliente } from '@src/modules/cliente/_entity/Cliente'
import { getAllClienteInject } from '@src/modules/cliente/injects/CreateClienteInject'

export const getAllClientes = async (): Promise<Cliente[]> => {
  return await getAllClienteInject().execute()
}
