import { IUser } from '@src/contracts/User'
import { prisma } from '@src/external/database/prisma_cliente/prisma_client'
import { makeID } from '@src/globals/makers/maker_identificator'

// METODO SEED QUE SERA CHAMADO NO SEED PRINCIPAL DO /PRISMA
type UserSeed = IUser

export async function userSeedMaker() {
  // .............................................
  /* CADA USER SEED */
  const userAdminSeed: UserSeed = await prisma.users.upsert({
    where: { email: 'adminSedd@email.com' },
    update: {},
    create: {
      nome: 'nomeADMINSedd',
      email: 'emailADMINSedd@email.com',
      password: 'passwordADMINSedd@email.com',
      identificador: 'cnpjADMINSedd',
      id: makeID(),
    },
  })
  // .............................................
  /* CADA user SEED */
  const userDoisSeed: UserSeed = await prisma.users.upsert({
    where: { email: 'doisSedd@email.com' },
    update: {},
    create: {
      nome: 'nomeDoisSedd',
      email: 'emailDoisSedd@email.com',
      password: 'passwordDoisSedd@email.com',
      identificador: 'cnpjDoisSedd',
      id: makeID(),
    },
  })
  // .............................................
  // .............................................
  /* CADA USER SEED */
  const userTresSeed: UserSeed = await prisma.users.upsert({
    where: { email: 'TresSedd@email.com' },
    update: {},
    create: {
      nome: 'nomeTresSedd',
      email: 'TresSedd@email.com',
      password: 'passwordTresSedd@email.com',
      identificador: 'cnpjTresSedd',
      id: makeID(),
    },
  })
  // .............................................
  //
}
