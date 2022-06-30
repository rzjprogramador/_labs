/* eslint-disable no-unused-vars */

import { ProdutoEncomenda } from "@/data/models"

const utilDefault = {
    stringSemInformacao: `NÃO INFORMADO !`,
    numeroInicial: 0,
    numeroInicialPreco: 15,
    numeroPrimeiraUnidade: 1,
    booleanInicial: false
}

export const prodEncomendaDefault: ProdutoEncomenda = {
    nome: 'Produto Encomenda',
    preco: utilDefault.numeroInicialPreco,
    dataEncomenda: {
        quantidade: utilDefault.numeroPrimeiraUnidade,
        destinatario: utilDefault.stringSemInformacao,
        comprador: utilDefault.stringSemInformacao,
        logradouro: utilDefault.stringSemInformacao,
        cep: utilDefault.stringSemInformacao,
        complemento: utilDefault.stringSemInformacao,
        cidade: utilDefault.stringSemInformacao
    },
    dadosControleProduto: {
        categoria: utilDefault.stringSemInformacao,
        statusEncomenda: 'Cadastrado'
    },
    stateCoberturaDeEntregas: { areaCobertura: 'Aprovado' },
    statePreco: { acrescimo: utilDefault.numeroInicial, desconto: utilDefault.numeroInicial, precoFinal: utilDefault.numeroInicial }
}
