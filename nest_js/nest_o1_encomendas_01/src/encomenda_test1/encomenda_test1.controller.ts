import { Controller, Get, Param } from '@nestjs/common';
import { EncomendaTest1Service } from './encomenda_test1.service';

@Controller('encomenda-test1')
export class EncomendaTest1Controller {
  constructor(private readonly encomendaTest1Service: EncomendaTest1Service) {}

  @Get('rota1')
  alo(): string {
    return `Alo to no Controle 1 --`;
  }

  @Get('rota2')
  rota2(): string {
    return `Esta é a rota 2`;
  }

  // UTILIZANDO A FUNCAO VINDA DO SERVICO
  // @Get('rota-encomenda1')
  // funcaoServicalControle(): string {
  //   return this.encomendaTest1Service.getFuncaoServical();
  // }

  @Get('buscar-dado/:nome')
  buscarDado(@Param('nome') nome: string): string {
    return `Prazer em conhecer ${nome}`;
    // browser : http://localhost:3333/encomenda-test1/buscar-dado/Reinaldo
  }
}
