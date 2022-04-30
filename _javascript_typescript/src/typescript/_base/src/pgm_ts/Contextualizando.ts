export class Contextualizando {
    constructor(
        tecnologia: string,
        contexto: string,
        explicacaoSimples: string,
        explicacaoTecnica: string,
        diferencial: string,
        relacionamento: string,
        captura: string,
        uso: string,
        exemplo: string,
        doc: string,
        tutorial: string,
        diagrama: string,
    ) {}
}

const ContextoDOM = new Contextualizando(

    tecnologia = `DOM`,

    contexto = `api DOM`,

    explicacaoSimples = `
    Dom é a classe do Navegador - onde acessamos via JS suas props e metodos
    `,

    explicacaoTecnica = `
    Dom == Document Object Model :: Modelo de Objeto do Documento do Browser
    `,

    diferencial = `
    Js tem sua sintaxe e DOm repreenta a Classe do Documento Html no navegador
    `,

    relacionamento = `
    Tem forte relacao com o Javascript atraves do JS nos comunicamos com o DOM
    `,

    captura = `
    guarda no JS a captura do html >> <varJS> = <document metodo captura html>
    `,

    uso = `
    agora que temos o html acessamos o DOM e usamos suas props e metodos e guardamos no JS para uso
    `,

    exemplo = `
    #html
    <div id="root"></h1>

    #js
    
    
    `,

    doc = `
    https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction
    `,

    tutorial = `
    https://www.youtube.com/watch?v=nOhtZs090dU&list=PLirko8T4cEmzWZVn_ZKQbfDOuCnSZJ4va&index=3
    `,

    diagrama = `
    https://app.diagrams.net/#G1aOKTOtucP28t7nKHMDrSV4ElLT0HYn-x
    `,

)
