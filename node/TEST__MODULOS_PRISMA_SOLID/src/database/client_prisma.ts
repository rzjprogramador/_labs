import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();


/*
* UNICA INSTANCIA PRISMA : QUE SERA A CENTRAL APRA QUEM FOR USAR O BANCO DE DADOS 

* ONDE FOR PRECISAR DO PRISMA IMPORTE:
import { prisma } from '@/database/client_prisma'

*/