import { Field, InputType, ArgsType, Int } from 'type-graphql'
import { MaxLength, Length, ArrayMaxSize, Min, Max } from 'class-validator'

@InputType()
export class NewReceitaInput {

  @Field() @MaxLength(30)
  titulo: string

  @Field({nullable: true}) @Length(30, 255)
  descricao?: string

  @Field(type => [String] ) @ArrayMaxSize(25)
  ingredientes: string[]

}

@ArgsType()
export class ReceitasArgs {

  @Field(type => Int)
  @Min(0)
  skip: number

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take: number = 25
}