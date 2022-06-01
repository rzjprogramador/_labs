// allow global `var` declarations
// eslint-disable-next-line no-var

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

// ONDE FOR USAR IMPORTAR A VAR { prisma } DESTE ARQUIVO QUE TERA UMA UNICA ISNTANCIA 

