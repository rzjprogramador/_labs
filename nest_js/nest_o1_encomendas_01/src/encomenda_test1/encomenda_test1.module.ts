import { Module } from '@nestjs/common';
import { EncomendaTest1Service } from './encomenda_test1.service';
import { EncomendaTest1Controller } from './encomenda_test1.controller';
import { AuthorsResolver } from '../resolvers/author.resolvers';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [PrismaService, EncomendaTest1Service, AuthorsResolver],
  controllers: [EncomendaTest1Controller],
})
export class EncomendaTest1Module {}
