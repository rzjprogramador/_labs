import { ProdutoEncomenda } from '@/data/models'
import { ProdutoEncomendaRepository } from "@/repositorios/contracts/repositories-contracts"

import { prismaClient } from '@/database/prisma-client'

export class CreateProdutoEncomendaRepoPrisma implements ProdutoEncomendaRepository {
    async create ({
        id,
        nome,
        preco,
        created_at,
        dataEncomenda: {
            quantidade,
            destinatario,
            comprador,
            logradouro,
            cep,
            complemento,
            cidade
        },
        dadosControleProduto: {
            categoria,
            statusEncomenda
        },
        stateCoberturaDeEntregas: {
            areaCobertura
        },
        statePreco: {
            acrescimo,
            desconto,
            precoFinal
        }
    }: ProdutoEncomenda): Promise<ProdutoEncomenda> {
        const produtoEncomenda = await prismaClient.produtoEncomenda.create({
            data: {
                id,
                nome,
                preco,
                created_at,
                dataEncomenda: {
                    quantidade,
                    destinatario,
                    comprador,
                    logradouro,
                    cep,
                    complemento,
                    cidade
                },
                dadosControleProduto: {
                    categoria,
                    statusEncomenda
                },
                stateCoberturaDeEntregas: {
                    areaCobertura
                },
                statePreco: {
                    acrescimo,
                    desconto,
                    precoFinal
                }
            }
        })

        return produtoEncomenda
    }
}

// Resolver objeto complexo : dataEncomenda >> no model do banco
