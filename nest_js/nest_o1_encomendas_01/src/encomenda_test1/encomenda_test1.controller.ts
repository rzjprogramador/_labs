import { Controller, Get, Param } from '@nestjs/common';
import { DeletarPai } from '@prisma/client';
import { EncomendaTest1Service } from './encomenda_test1.service';

@Controller('encomenda-test1')
export class EncomendaTest1Controller {
  constructor(private readonly encomendaTest1Service: EncomendaTest1Service) {}

  // TRAZENDO VIA SERVICO :: LA DO PRISMA  :: TODOS OS DADOS
  @Get('deletar-pai')
  async getDeletarPai(): Promise<DeletarPai[]> {
    return this.encomendaTest1Service.pais({});
  }

  // TRAZENDO VIA SERVICO :: LA DO PRISMA  :: POR PARAMS UNICO DADO PASSADO
  // ACESSAR : http://localhost:3333/encomenda-test1/deletar-pai/3     >> O ULTIMO NUMERO É DO ID PASSADO
  @Get('deletar-pai/:id')
  async getDeletarPaiById(@Param('id') id: string): Promise<DeletarPai> {
    return this.encomendaTest1Service.pai({
      id: Number.parseInt(id),

      // por no prisma o id ser inteiro apra auto-incrementar e no graphql ser string do ID convertemso para int aqui
    });
  }

  @Get('rota1')
  alo(): string {
    return `Alo to no Controle 1 --`;
  }

  @Get('rota-config-service')
  rotaIntegracaoConfigService(): string {
    return this.encomendaTest1Service.getTestService();
  }

  @Get('rota2')
  rota2(): string {
    return `Esta é a rota 2`;
  }

  // UTILIZANDO A FUNCAO VINDA DO SERVICO
  @Get('rota-encomenda1')
  funcaoServicalControle(): string {
    return this.encomendaTest1Service.getFuncaoServical();
  }

  @Get('buscar-dado/:nome')
  buscarDado(@Param('nome') nome: string): string {
    return `Prazer em conhecer ${nome}`;
    // browser : http://localhost:3333/encomenda-test1/buscar-dado/Reinaldo
  }
}
