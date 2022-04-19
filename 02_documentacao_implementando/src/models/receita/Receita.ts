import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Receita {
  
  @Field(type => ID)
  id: string

  @Field()
  titulo: string

  @Field( { nullable: true} )
  descricao?: string

  creationDate: Date

  @Field(() => [String])
  ingredientes: string[]

}