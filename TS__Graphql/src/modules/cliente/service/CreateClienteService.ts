import { Cliente } from '@src/modules/cliente/_entity/Cliente'
import { ClienteRepository } from '@src/modules/cliente/contracts/ClienteRepository'

export class CreateClienteService {
  constructor(private readonly clienteRepository: ClienteRepository) {}

  async execute(input: Cliente) {
    const { nome, email, password, identificador } = input

    // REGRAS
    const nomeModificado = nome.toUpperCase()

    //

    const cliente = await this.clienteRepository.create({
      nome: nomeModificado,
      email,
      password,
      identificador,
    })
    return cliente
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
