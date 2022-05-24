export interface CreateProdEncomenda {
  nome: string
  preco: number
}

export interface ProdEncomendaRepository {
  create(data: CreateProdEncomenda): Promise<void>
}