/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { Author } from 'src/models/author.model';

@Injectable()
export class EncomendaTest1Service {
  getFuncaoServical(): string {
    return `Retorno da funcao Servical`;
  }

  async findAuthorById(id: number) {
    // TODO
    return;
  }

  async findPedidosByAuthor({ authorId: Author }) {
    // TODO
    return;
  }
}
