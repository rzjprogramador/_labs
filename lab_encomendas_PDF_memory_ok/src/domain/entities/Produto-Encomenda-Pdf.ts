import { ProdutoEncomenda, DataEncomenda, DadosControleProduto, StateCoberturaDeEntregas, StatePreco } from '@/data/models'
import { makeID } from '@/utils/helpers/factories/produto-encomenda-factories/makes'

export class ProdutoEncomendaPdf implements ProdutoEncomenda {
    id?: string
    nome?: string
    preco?: number
    created_at?: Date
    dataEncomenda: DataEncomenda
    dadosControleProduto: DadosControleProduto
    stateCoberturaDeEntregas: StateCoberturaDeEntregas
    statePreco: StatePreco

    constructor () {
        if (!this.id) {
            this.id = makeID()
        }
    }
}
