import { Field, ObjectType } from 'type-graphql'

import { IUser } from '@src/contracts/User'
import { User } from '@src/entities/User'

interface IAuth {
  token: string
  user: IUser
}

@ObjectType()
export class Auth implements IAuth {
  @Field({ nullable: false })
  token: string

  @Field(() => User, { nullable: false })
  user: User
}
