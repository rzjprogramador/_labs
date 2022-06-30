import { prisma } from '@src/external/database/prisma_cliente/prisma_client'
import { userSeedMaker } from '@src/seeds/UserSeed'

async function main() {
  // TODOS OS GERADORES DE SEED DE CADA MODULO
  await userSeedMaker()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
