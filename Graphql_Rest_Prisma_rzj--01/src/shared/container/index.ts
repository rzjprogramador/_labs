import { GetClientesPostgresPrisma } from '@src/modules/clientes/repositories/GetClientesPostgresPrisma'
import { GetAllClientesRepository, IClientesRepository } from '@src/modules/clientes/contracts/IClientesRepository'
import { container } from 'tsyringe'
import { ClientePostgresRepositoryPrisma } from '@src/modules/clientes/repositories/ClientePostgresRepositoryPrisma'

container.registerSingleton<GetAllClientesRepository>('GetClientesPostgresPrisma', GetClientesPostgresPrisma)

container.registerSingleton<IClientesRepository>('ClientePostgresRepositoryPrisma', ClientePostgresRepositoryPrisma)
