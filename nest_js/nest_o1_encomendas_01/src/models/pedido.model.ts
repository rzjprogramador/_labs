/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pedido {
  @Field(type => ID)
  id: string;
  
  @Field(type => Int)
  quantidade: number;

  descricao: string;

}
