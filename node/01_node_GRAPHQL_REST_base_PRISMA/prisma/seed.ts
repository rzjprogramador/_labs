import { prisma } from '../src/database/client_prisma'

import { usersMakeSeed } from '../src/modules/users/shared_module/seed/users_make_seed'

async function main() {

  usersMakeSeed()
}

// EXECUTANDO ESTA FUNCAO MAIN()
main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })