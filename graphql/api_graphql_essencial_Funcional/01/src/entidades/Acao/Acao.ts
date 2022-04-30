import  { AcaoProtocolSchema } from './protocolos/AcaoSchemaProtocol'
import { Field, ID, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export default class Acao implements AcaoProtocolSchema {

    @Field(type => ID, { nullable: true })
    _id?: any

    @Field({ nullable: false })
    author: string

    @Field({ nullable: false })
    description: string

    @Field({ nullable: true })
    likes: number

    @Field({ nullable: true })
    createdAt?: Date

    @Field({ nullable: true })
    updatedAt?: Date
}

