import { Test, TestingModule } from '@nestjs/testing';
import { EncomendaTest1Controller } from './encomenda_test1.controller';

describe('EncomendaTest1Controller', () => {
  let controller: EncomendaTest1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncomendaTest1Controller],
    }).compile();

    controller = module.get<EncomendaTest1Controller>(EncomendaTest1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
