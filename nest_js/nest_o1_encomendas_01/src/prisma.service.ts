import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  onModuleDestroy() {
    // TODO
    throw new Error('Method not implemented.');
  }
  async onModuleInit() {
    await this.$connect();
  }
}
