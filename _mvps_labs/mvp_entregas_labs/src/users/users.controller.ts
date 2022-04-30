import { Controller, Get } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('hello')
  hello(): string {
    return `Hello Word`
  }

  @Get('servico')
  foo() {
    return this.usersService.bar()
  }
}
