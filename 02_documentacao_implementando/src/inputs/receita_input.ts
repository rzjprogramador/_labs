import { Field, InputType } from 'type-graphql'
import { MaxLength, Length, ArrayMaxSize } from 'class-validator'

@InputType()
export class ReceitaInput {

  @Field() @MaxLength(30)
  titulo: string

  @Field({nullable: true}) @Length(30, 255)
  descricao?: string

  @Field(type => [String] ) @ArrayMaxSize(25)
  ingredientes: string[]


}