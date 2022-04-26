import { Test, TestingModule } from '@nestjs/testing';
import { Base1Service } from './base_1/base_1.service';

describe('Base1Service', () => {
  let service: Base1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Base1Service],
    }).compile();

    service = module.get<Base1Service>(Base1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
