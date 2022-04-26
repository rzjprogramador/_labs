import { NotFoundException } from '@nestjs/common';
import { DeletarPai } from '@prisma/client';

export function existPai(alvo: any): DeletarPai {
  if (!alvo) {
    throw new NotFoundException();
  }
  return alvo;
}
