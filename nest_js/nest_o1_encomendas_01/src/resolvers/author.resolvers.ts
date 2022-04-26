/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Query,
  Resolver,
  ResolveField,
  Parent,
  Args,
  Int,
} from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { EncomendaTest1Service } from '../encomenda_test1/encomenda_test1.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private encomendaService: EncomendaTest1Service) {}

  @Query((returns) => [Author])
  async authors() {
    return this.encomendaService.pais({});
  }

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.encomendaService.findAuthor({ id });
  }
}
