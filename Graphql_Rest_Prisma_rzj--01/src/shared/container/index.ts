import { GetClientesPostgresPrisma } from '@src/modules/clientes/repositories/GetClientesPostgresPrisma'
import { GetAllClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'
import { container } from 'tsyringe'

container.registerSingleton<GetAllClientesRepository>('GetClientesPostgresPrisma', GetClientesPostgresPrisma)
