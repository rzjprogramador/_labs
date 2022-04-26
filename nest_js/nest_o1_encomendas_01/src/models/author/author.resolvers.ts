/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Query,
  Resolver,
  ResolveField,
  Parent,
  Args,
  Int,
} from '@nestjs/graphql';
import { Author } from './author.model';
// import { EncomendaTest1Service } from '../../encomenda_test1/encomenda_test1.service';
import { AuthorService } from './author.service';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private authorService: AuthorService) {}

  @Query((returns) => [Author])
  async authors() {
    return this.authorService.authors({});
  }

  @Query((returns) => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.author({ id });
  }
}

/*
* NAVEGADOR: http://localhost:3333/graphql/author/authors
*/
