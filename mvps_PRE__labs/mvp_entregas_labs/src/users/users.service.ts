import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService {
  bar(): string {
    return `Estou no Servico`
  }
}
