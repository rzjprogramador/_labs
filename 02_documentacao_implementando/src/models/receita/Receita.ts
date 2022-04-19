import { Field, Float, ObjectType } from 'type-graphql'
import { Avaliacao } from './Avaliacao'

@ObjectType()
export class Receitas {

  @Field()
  titulo: string

  @Field( { nullable: true} )
  descricao?: string

  @Field(() => [Avaliacao])
  avaliacoes: Avaliacao[]

  @Field(type => Float, { nullable: true })
  get mediaAvaliacao (): number {
    const soma = this.avaliacoes.reduce( (a: number, b: number) => a + b, 0 )
    return soma / this.avaliacoes.length
  }

}