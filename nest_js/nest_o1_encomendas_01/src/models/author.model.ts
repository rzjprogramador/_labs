import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Pedido } from './pedido.model';

@ObjectType()
export class Author {
  @Field((type) => ID)
  id: string;
  nome?: string;
  email: string;
  senha: string;

  @Field((type) => [Pedido])
  pedidos: Pedido[];
}
