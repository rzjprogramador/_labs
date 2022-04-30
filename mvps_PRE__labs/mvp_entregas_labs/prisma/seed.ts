import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// import { UsersProtocol } from '../src/contracts/protocols/users.interface';

async function main() {
  /*
   * CRIANDO SEED : CRIE A SUA ENTIDADE =================
  -- CRIE SEU OBJETO D EENTIDADE DO BANCO AQUI :
   */
  const entregas = await prisma.entregas.upsert({
    where: { id: '1' },

    create: {
      quantidade: 1,

      remetente: 'remetente_SEED_1',
      destinatario: 'destinatario_SEED_1',
      logradouro: 'rua _SEED_1',
      numero: 'numero _SEED_1',
      complemento: 'complemento _SEED_1',
      cep: 'cep _SEED_1',
      // cidade: 'cidade _SEED_1',
      estado: 'estado _SEED_1',

      pedidos: {},
      cidades: {},
    },

    /*
     * =================CRIANDO SEED FINAL DO OBJ -- ANTES DO UPDATE QUE ELE DEVE TER
     */
    update: {},
  })
} // main

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
