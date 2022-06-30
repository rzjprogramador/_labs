import { IUser } from '@src/contracts/User'
import { ID, Field, ObjectType } from 'type-graphql'

@ObjectType()
export class User implements IUser {
  @Field((type) => ID, { nullable: true })
  id?: string

  @Field({ nullable: true })
  idb?: string

  @Field({ nullable: false })
  nome: string

  @Field({ nullable: false })
  email: string

  @Field({ nullable: false })
  password: string

  @Field({ nullable: false })
  identificador: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  utimoLogin?: Date
}
