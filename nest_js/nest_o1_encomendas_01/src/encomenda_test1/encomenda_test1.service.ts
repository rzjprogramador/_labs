/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';
import { Prisma, DeletarPai, DeletarPedidoFilho } from '@prisma/client';
// import { Author } from '../models/author.model';

@Injectable()
export class EncomendaTest1Service {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  getTestService(): string {
    return this.configService.get<string>('TEST_STRING');
  }

  // Usando o model feito no prisma - nas definicoes de tipos do prisma ::procurar por <nome do model> WhereUniqueInput

  // BUSCAR PAI UNICO
  async pai(
    paiUnicoInput: Prisma.DeletarPaiWhereUniqueInput,
  ): Promise<DeletarPai | null> {
    return this.prisma.deletarPai.findUnique({
      where: paiUnicoInput,
    });
  }

  // BUSCAR OS DADOS DO PAI
  async pais(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DeletarPaiWhereUniqueInput;
    where?: Prisma.DeletarPaiWhereInput;
    orderBy?: Prisma.DeletarPaiOrderByWithAggregationInput; //era ByInput na aula
  }): Promise<DeletarPai[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.deletarPai.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getFuncaoServical(): string {
    return `Retorno da funcao Servical`;
  }
  async findAuthorById(id: string) {
    // TODO
    return;
  }
  async findPedidosByAuthor({ authorId: Author }) {
    // TODO
    return;
  }
}
