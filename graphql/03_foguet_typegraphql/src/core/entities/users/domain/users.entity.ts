import { Field, ID, ObjectType } from "type-graphql";
import { UsersProtocol } from "../protocols/users.protocol";

@ObjectType()
export class Users implements UsersProtocol {
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
