import { Injectable } from '@nestjs/common';

@Injectable()
export class EncomendaTest1Service {
  getFuncaoServical(): string {
    return `Retorno da funcao Servical`;
  }
}
