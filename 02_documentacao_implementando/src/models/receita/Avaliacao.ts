import { Field, Int, ObjectType } from 'type-graphql'
import { User } from '../User'
import { Receita } from './Receita'

@ObjectType()
export class Avaliacao {
  @Field()
  id: number
  
  @Field(type => Int)
  valor: number

  @Field(type => User)
  user: User

  @Field()
  data: Date

  // @Field(returns => Receita)
  receita: Promise<Receita>
}