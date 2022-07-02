import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma }

/*
POLO UNICO CLIENT PRISMA >> ACESSO AO BANCO POSTGRES
NAO PRECISA DE SINGLETON ELE JA FAZ O CONNECT E DISCONNECT.
*/
