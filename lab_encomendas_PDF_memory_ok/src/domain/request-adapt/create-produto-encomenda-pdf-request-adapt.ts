/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-unused-vars */
/* eslint-disable capitalized-comments */
/* eslint-disable no-undef */

import { makeID, makePrice, makeStatusEncomenda, makeAcrescimo, makeDesconto, makePrecoFinal, makeStateCoberturaDeEntregas } from '@/utils/helpers/factories/produto-encomenda-factories/makes'
import { ProdutoEncomenda } from '@/data/models'
import {
    detectLogradouro, detectCep, detectComprador, detectDestinatario,
    detectQuantidade, detectComplemento, detectCidade, detectEstado
} from '@/utils/helpers/produto-encomenda-pdf-helpers'
import { prodEncomendaDefault } from '@/utils/helpers/objects-util/produto-encomenda-default'

import fs from 'fs'
import pdfParse from "pdf-parse"

export class CreateProdutoEncomendaPdfRequestAdapt {
    async execute (file: Express.Multer.File): Promise<ProdutoEncomenda[]> {
        /* JA ESTOU COM O ARQUIVO DINAMICAMENTE -> CONVERTER EM TEXT */
        const dadosEmTexto = fs.readFileSync(file.path)
        const recebido = await pdfParse(dadosEmTexto)
        const textLineAll = recebido.text // TODOS OS TEXTOS

        /* CADA CHAVE -- CAPTURANDO SUAS LINHAS */
        const quantidade = detectQuantidade('Quantidade: ', textLineAll)
        const destinatario = detectDestinatario('Destinatario: ', textLineAll)
        const comprador = detectComprador('Comprador: ', textLineAll)
        const logradouro = detectLogradouro('Endereço: ', textLineAll)
        // const dadosNumero = detectNumero('Endereço: ', textLineAll)
        const cep = detectCep('CEP: ', textLineAll)
        const complemento = detectComplemento('Complemento: ', textLineAll)
        const cidade = detectCidade('Cidade: ', textLineAll)
        const estado = detectEstado('Cidade: ', textLineAll)

        // console.log(quantidade,destinatario,comprador,logradouro, cep, complemento, cidade, leste)

        // COLECIONANDO OS OBJETOS COM AS LINHAS DETECTADAS
        const colecaoArraysDadosPdf = []
        colecaoArraysDadosPdf.push(quantidade, destinatario, comprador, logradouro, cep, complemento, cidade, estado)

        const colecaoObjsEntregaPdf = colecaoArraysDadosPdf.map((_, item) => {
            return {
                id: makeID(),
                nome: 'Produto Encomenda',
                preco: prodEncomendaDefault.preco,
                dataEncomenda: {
                    quantidade: Number(quantidade![item]),
                    destinatario: destinatario![item],
                    comprador: comprador![item],
                    logradouro: logradouro![item],
                    cep: cep![item],
                    complemento: complemento![item],
                    cidade: cidade![item],
                    estado: estado![item]
                },
                dadosControleProduto: {
                    categoria: prodEncomendaDefault.dadosControleProduto.categoria,
                    statusEncomenda: prodEncomendaDefault.dadosControleProduto.statusEncomenda
                },
                stateCoberturaDeEntregas: {
                    areaCobertura: prodEncomendaDefault.stateCoberturaDeEntregas.areaCobertura
                },
                statePreco: {
                    acrescimo: prodEncomendaDefault.statePreco.acrescimo,
                    desconto: prodEncomendaDefault.statePreco.desconto,
                    precoFinal: prodEncomendaDefault.statePreco.precoFinal
                }
            }
        })
        return colecaoObjsEntregaPdf
    }
}
/*

*/
