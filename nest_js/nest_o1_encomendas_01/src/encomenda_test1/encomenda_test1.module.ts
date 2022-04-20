import { Module } from '@nestjs/common';
import { EncomendaTest1Service } from './encomenda_test1.service';
import { EncomendaTest1Controller } from './encomenda_test1.controller';

@Module({
  providers: [EncomendaTest1Service],
  controllers: [EncomendaTest1Controller],
})
export class EncomendaTest1Module {}
