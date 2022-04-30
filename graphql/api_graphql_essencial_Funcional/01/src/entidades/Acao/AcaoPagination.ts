// import  { AcaoProtocolSchema } from './protocolos/AcaoSchemaProtocol'
import { Field, ObjectType } from 'type-graphql'
import Acao from './Acao'


@ObjectType()
export class AcaoPagination {
    @Field(type => [Acao])
    acaos: Acao[]

    @Field()
    totalPages: number
}
