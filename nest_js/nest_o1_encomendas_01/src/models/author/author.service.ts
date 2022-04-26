import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, DeletarPai } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

import { Author } from './author.model';
import { AuthorDTO } from './protocols/authorDTO';

@Injectable()
export class AuthorService {
  constructor(
    private readonly configService: ConfigService, // PARA VARIAVEIS GLOBAIS
    private readonly prisma: PrismaService,
  ) {}

  getTestService(): string {
    return this.configService.get<string>('TEST_STRING');
  }

  async author(uniqueId: AuthorDTO): Promise<DeletarPai> {
    return await this.prisma.deletarPai.findUnique({
      where: uniqueId,
    });
  }

  async authors(params: {
    skip?: number;
    take?: number;
    cursor?: AuthorDTO;
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
}
