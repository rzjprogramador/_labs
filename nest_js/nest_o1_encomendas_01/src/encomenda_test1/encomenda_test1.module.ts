import { Module } from '@nestjs/common';
import { EncomendaTest1Service } from './encomenda_test1.service';
import { EncomendaTest1Controller } from './encomenda_test1.controller';
import { AuthorsResolver } from '../models/author/author.resolvers';
import { PrismaService } from '../prisma.service';
import { AuthorService } from 'src/models/author/author.service';

@Module({
  providers: [
    PrismaService,
    EncomendaTest1Service,
    AuthorsResolver, // TODO NAO SEI PORQUE TEVE QUE IMPORTAR AQUI O RESOLVER E MODULO DO AUTHOR
    AuthorService,
  ],
  controllers: [EncomendaTest1Controller],
})
export class EncomendaTest1Module {}
