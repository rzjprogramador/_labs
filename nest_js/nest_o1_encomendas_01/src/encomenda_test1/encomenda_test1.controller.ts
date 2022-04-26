import { Controller, Get, Param } from '@nestjs/common';
import { DeletarPai } from '@prisma/client';
import { EncomendaTest1Service } from './encomenda_test1.service';

import { existPai } from '../helpers/verifications/pai_verifications';

@Controller('encomenda-test1')
export class EncomendaTest1Controller {
  constructor(private readonly encomendaTest1Service: EncomendaTest1Service) {}

  // TRAZENDO VIA SERVICO :: LA DO PRISMA  :: TODOS OS DADOS
  @Get('deletar-pai')
  async getDeletarPais(): Promise<DeletarPai[]> {
    return this.encomendaTest1Service.pais({});
  }

  @Get('deletar-pai/:id')
  async getDeletarPaiById(@Param('id') id: string): Promise<DeletarPai> {
    const pai = await this.encomendaTest1Service.pai({
      id: Number.parseInt(id),
    });
    return existPai(pai);
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
  }
}
