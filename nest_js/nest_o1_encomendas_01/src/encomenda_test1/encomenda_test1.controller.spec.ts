import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { EncomendaTest1Controller } from './encomenda_test1.controller';
import { EncomendaTest1Service } from './encomenda_test1.service';

describe('EncomendaTest1Controller', () => {
  let controller: EncomendaTest1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncomendaTest1Controller],
      providers: [EncomendaTest1Service, PrismaService],
    }).compile();

    controller = module.get<EncomendaTest1Controller>(EncomendaTest1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
