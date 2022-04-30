class Erro {
    constructor(
        tecnologia: string,
        erro: string,
        tipoErro: string,
        traducao: string,
        causa: string,
        solucao: string,
        exemplo: string,
    ) {}
}

const erroDeReferencia = new Erro(
    `Javascript`,
    `Uncaught ReferenceError`,
    `ReferenceError`,
    `Erro de Referencia não capturado`,
    `pode ser falta ou erro de importacao da referencia`,
    `Importar corretamente a referencia`,
    `..importar corretamente...`,
)

const typeError_objectPossibillyNull_TS = new Erro(
    `Typescript`,
    `Type error: Object is possibly null. TS2531 `,
    'Type error',
    `Objeto pode ser nulo TS2531`,
    `O Objeto pode ser nulo e o interpretador fica sem resposta`,
    `ao capturar o que vai usar coloque exclamação ! apos do objeto captura para mostrar que confia que não pé nulo o que esta referenciando`,

    `
    document.querySelector('#root')!
    `,
)
