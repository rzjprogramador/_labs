import { Arg, Mutation, Query, Resolver } from "type-graphql"
import Acao from './Acao'
import acaoModelMongo from './providers/db_mongo/acaoModelMongo'
import { AcaoRepository } from './repositories/acaoRepository'

// import AcaoController from './AcaoController'


@Resolver(Acao)
export default class AcaoQuery {

    @Query(returns => [Acao], { name: 'acaos' })
    async find() {
        const acaos = await AcaoRepository.getAll()
        return acaos
    }

    @Query(returns => Acao, { name: 'acao' })
    async findById(
        @Arg('id')id: string
    ) {
        const acao = await AcaoRepository.getById(id)
        
        if(!acao) {
            throw new Error('Esta acao nao existe !')
        }

        return acao

    }
}