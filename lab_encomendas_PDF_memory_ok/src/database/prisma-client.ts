import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

/* Classe de Conexao com o BD */
export { prismaClient }
