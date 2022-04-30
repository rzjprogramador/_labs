import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Acao from './Acao'
import acaoModelMongo from './providers/db_mongo/acaoModelMongo'
import { AcaoRepository } from './repositories/acaoRepository'
import { AcaoPagination } from './AcaoPagination'

@Resolver(Acao)
export default class AcaoController {

    // Paginacao dessa Entidade
    @Query(returns => AcaoPagination, {name: 'acaos'})
    async find(
        @Arg('page') page: number,
        @Arg('pageSize') pageSize: number) {
            const acaos = await acaoModelMongo.find().
            sort({createdAt: -1}).limit(pageSize).skip(pageSize * page)

            const total = await acaoModelMongo.countDocuments()

            return { acaos, totalPages: Math.ceil(total / pageSize) }
        }
 
    // Buscar Todos
    // @Query(returns => [Acao], { name: 'acaos' })
    // async find() {
    //     const acaos = await AcaoRepository.getAll()
    //     return acaos
    // }

    // Buscar Um por id 
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