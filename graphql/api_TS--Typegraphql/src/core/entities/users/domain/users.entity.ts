import { Field, ID, ObjectType } from "type-graphql";
import { IUsers } from "./contracts/users.protocol";

@ObjectType()
export class Users implements IUsers {
  @Field(() => ID)
  id?: string

  @Field(() => String)
  nome: string;

  @Field(() => String)
  sobrenome: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
