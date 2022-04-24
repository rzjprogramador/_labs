/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma.service';
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
