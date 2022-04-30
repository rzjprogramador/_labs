// tentar Centralizar ::

import AcaoQuery from './AcaoQuery'
import AcaoMutation from './AcaoMutation'


export default class AcaoController {}

module.exports = {
    AcaoQuery,
    AcaoMutation,

}



// ----------------------------------------

// Backup acao controller

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Acao from './Acao'
import acaoModelMongo from './providers/db_mongo/acaoModelMongo'
import { AcaoRepository } from './repositories/acaoRepository'

@Resolver(Acao)
export default class AcaoController {

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

    @Mutation(returns => Acao, { name: 'createAcaos'})
    async create(
        @Arg('author') author: string, 
        @Arg('description') description: string
        ) {
            const acao = await acaoModelMongo.create({ author, description, likes: 0})
            return acao

    }

    @Mutation(returns => Acao, { name: 'updateAcao'})
    async update(
        @Arg('id') id: string, 
        @Arg('author') author: string, 
        @Arg('description') description: string
        ) {
            const acao = await acaoModelMongo.findByIdAndUpdate(id, { author, description, likes: 0}, { new: true })
            return acao

    }

    @Mutation(returns => Acao, { name: 'upLikeAcao'})
    async upLikeAcao(
        @Arg('id')id: string
    ) {
        const acao = await acaoModelMongo.findById(id)

        if(!acao) {
            throw new Error('Esta acao nao existe !')
        }

        acao.set({ likes: acao?.likes + 1 })

        await acao.save()
        return acao
    }

    @Mutation(returns => Acao, { name: 'downLikeAcao'})
    async downLikeAcao(
        @Arg('id')id: string
    ) {
        const acao = await acaoModelMongo.findById(id)

        if(!acao) {
            throw new Error('Esta acao nao existe !')
        }

        acao.set({ likes: acao?.likes - 1 })

        await acao.save()
        return acao
    }
}