import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { AuthorsResolver } from './author.resolvers';
import { AuthorService } from './author.service';

@Module({
  providers: [PrismaService, AuthorService],
  // imports: [AuthorsResolver],
})
export class AuthorModule {}
