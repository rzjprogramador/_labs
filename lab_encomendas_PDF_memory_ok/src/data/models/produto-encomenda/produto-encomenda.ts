import { StatusEncomenda, AreaCobertura } from './produto-encomenda-types-status'

export interface ProdutoEncomenda {
    id?: string
    nome: string
    preco: number
    created_at?: Date
    dataEncomenda: DataEncomenda
    dadosControleProduto: DadosControleProduto
    stateCoberturaDeEntregas: StateCoberturaDeEntregas
    statePreco: StatePreco
}

// SubTipos
export type DataEncomenda = {
    quantidade: number
    destinatario: string
    comprador: string
    logradouro: string
    cep: string
    complemento: string
    cidade: string
    estado: string
}

export type DadosControleProduto = {
    categoria: string
    statusEncomenda: StatusEncomenda
}

export type StateCoberturaDeEntregas = {
    areaCobertura: AreaCobertura

}

export type StatePreco = {
    acrescimo: number
    desconto: number
    precoFinal: number
}
