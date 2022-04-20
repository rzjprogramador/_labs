import { Test, TestingModule } from '@nestjs/testing';
import { EncomendaTest1Service } from './encomenda_test1.service';

describe('EncomendaTest1Service', () => {
  let service: EncomendaTest1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EncomendaTest1Service],
    }).compile();

    service = module.get<EncomendaTest1Service>(EncomendaTest1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
