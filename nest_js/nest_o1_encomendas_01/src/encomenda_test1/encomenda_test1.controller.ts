import { Controller, Get } from '@nestjs/common';

@Controller('encomenda-test1')
export class EncomendaTest1Controller {
  @Get('rota1')
  alo(): string {
    return `Alo to no Controle 1 --`;
  }

  @Get('rota2')
  rota2(): string {
    return `Esta é a rota 2`;
  }
}
