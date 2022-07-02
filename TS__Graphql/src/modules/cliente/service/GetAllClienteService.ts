import { Cliente } from '@src/modules/cliente/_entity/Cliente'
import { ClienteRepository } from '@src/modules/cliente/contracts/ClienteRepository'

export class GetAllClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async execute() {
    return this.clienteRepository.getAllClientes()
  }

  //
}

// export async function CreateClienteService(request: Cliente) {
//   const { nome, email, password, identificador } = request

//   // * REGRAS COM OS CAMPOS DESEMPACOTADOS - ANTES DE SALVAR PODE FAZER AQUI *
//   // .. regras.

//   const nomeModificado = nome.toUpperCase()

//   //

//   const newClienteService = await Cliente.create({
//     nome: nomeModificado,
//     email,
//     password,
//     identificador,
//   })
//   return newClienteService
// }
