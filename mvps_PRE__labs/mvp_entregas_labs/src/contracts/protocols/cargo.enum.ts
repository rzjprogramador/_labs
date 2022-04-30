// import { Prisma } from '@prisma/client'

// export enum CargoUserProtocol = Prisma.Cargo

export enum CargoUserProtocol {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERADOR = 'MODERADOR',
  FUNCIONARIO = 'FUNCIONARIO',
  ENTREGADOR = 'ENTREGADOR',
}
