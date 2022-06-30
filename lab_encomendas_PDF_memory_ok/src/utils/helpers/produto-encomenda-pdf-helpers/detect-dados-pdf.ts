/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { regexUtil } from "@/utils/helpers/objects-util"

export function detectLogradouro (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9${regexUtil.scapeSpeciais}A -zO -9])+`, "gi")

    const capLogradouro = convertidoText.match(expressaoDetectadora)
    const logradouro = capLogradouro?.map((elem) => elem.replace(removeSpaceKey, ''))
    return logradouro
}

// Export function detectNumero (key: string, convertidoText: string) {
//     Const removeSpaceKey = key
//     Const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

//     Const capNumero = convertidoText.match(expressaoDetectadora)
//     Const numero = capNumero?.map((elem) => elem.replace(removeSpaceKey, ''))
//     Return numero
// }

export function detectCep (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capCep = convertidoText.match(expressaoDetectadora)
    const cep = capCep?.map((elem) => elem.replace(removeSpaceKey, ''))
    return cep
}

export function detectComprador (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capComprador = convertidoText.match(expressaoDetectadora)
    const comprador = capComprador?.map((elem) => elem.replace(removeSpaceKey, ''))
    return comprador
}

export function detectDestinatario (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capDestinatario = convertidoText.match(expressaoDetectadora)
    const destinatario = capDestinatario?.map((elem) => elem.replace(removeSpaceKey, ''))
    return destinatario
}

export function detectQuantidade (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capQuantidade = convertidoText.match(expressaoDetectadora)
    const quantidade = capQuantidade?.map((elem) => elem.replace(removeSpaceKey, ''))
    return quantidade
}

export function detectComplemento (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capComplemento = convertidoText.match(expressaoDetectadora)
    const complemento = capComplemento?.map((elem) => elem.replace(removeSpaceKey, ''))
    return complemento
}

export function detectCidade (key: string, convertidoText: string) {
    const removeSobra = ''
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9${regexUtil.scapeSpeciais}])+`, "gi")

    const capCidade = convertidoText.match(expressaoDetectadora)
    const cidade = capCidade?.map((elem) => elem.replace(removeSpaceKey, removeSobra))
    return cidade
}

export function detectEstado (key: string, convertidoText: string) {
    const removeSobra = ''
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9${regexUtil.scapeSpeciais}])+`, "gi")

    const capCidade = convertidoText.match(expressaoDetectadora)
    const cidade = capCidade?.map((elem) => elem.replace(removeSpaceKey, removeSobra))
    return cidade
}

export function detectLeste (key: string, convertidoText: string) {
    const removeSpaceKey = key
    const expressaoDetectadora = new RegExp(`${key}([A -zO -9])+`, "gi")

    const capLeste = convertidoText.match(expressaoDetectadora)
    const leste = capLeste?.map((elem) => elem.replace(removeSpaceKey, ''))
    return leste
}
