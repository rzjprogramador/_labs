import { Arg, Mutation, Query } from 'type-graphql'
import { Avaliacao } from '../models/receita/Avaliacao'
import { Receita } from '../models/receita/Receita'

export class ReceitaResolver {

  constructor (
    private readonly receitaRepository: Repository<Receita>
    private readonly avaliacaoRepository: Repository<Avaliacao>
  ) {}

  @Query(returns => Receita)
  async receita (
    @Arg('receitaId' receitaId: string)
  ) {
    return this.receitaRepository.findOneById(receitaId)
  }

  @Mutation(returns => Receita)
  addReceita (@Arg('receita') receitaInput: ReceitaInput) {
    const newReceita = this.receitaRepository.create(receitaInput)
    return this.receitaRepository.save(newReceita)
  }

}