import { Arg, Args, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { ReceitasArgs } from '../../inputs/receita/receita_input'
import { Receita } from '../../models/receita/Receita'
import { User } from '../../models/user/User'
import { ReceitaService } from '../../service/receita/receita_service'

@Resolver(Receita)
export class ReceitaResolver {

  constructor (
    private readonly receitaService: ReceitaService
  ) {}

  @Query(returns => Receita)
  async receita (Arg('id') id: string) {
    const receita = await this.receitaService.findById(id)

    if (receita == undefined) {
      throw new ReceitaNotFoundError(id)
    }
    return receita
  } 

  @Query(returns => Receita)
  receitas (@Args() { skip, take }: ReceitasArgs) {
    return this.receitaService.findAll({ skip, take })
  }

  @Mutation(returns => Receita)
  @Authorized()
  addReceita (
    @Arg('newReceitaData' newReceitaData: NewReceitaInput,
    @Ctx('user') user: User
    ): Promise<Receita>
  ) {
    return this.receitaService.addNew({ data: newRecipeData, user })
  }

  @Mutation(returns => Boolean)
  @Authorized(Roles.Admin)
  async removeReceita (@Arg('id') id: string) {
    try {
      await this.receitaService.removeById(id)
      return true
    }
    catch {
      return false
    }
  }

}