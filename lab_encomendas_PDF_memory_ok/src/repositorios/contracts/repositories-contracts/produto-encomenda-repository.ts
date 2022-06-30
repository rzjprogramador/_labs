import { ProdutoEncomendaModel } from "@/domain/data/contracts"
import { ProdutoEncomendaRepositoryDTO } from "@/domain/data/dto"

export interface ProdutoEncomendaRepository {

    create ({
        id,
        preco,
        created_at,
        dataEncomenda: {
            quantidade,
            destinatario,
            comprador,
            logradouro,
            cep,
            complemento
        }
    }: ProdutoEncomendaRepositoryDTO): Promise<ProdutoEncomendaModel>

}
