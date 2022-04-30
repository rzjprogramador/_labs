export class Fluxo {
    constructor(
        tecnologia: string,
        contexto: string,
        simplicidade: string,
        captura: string,
        guarda: string,
        usoCapturado: string,
        valorcapturado: string,
        diagrama: string,
    ) {}
}

const fluxoApiDomJS = new Fluxo(
    'Javascript',
    'Fluxo Javacript Api Dom Html',
    'alterno o uso :: Javascript para guardar referencia > HTML // Javascript > DOM - capturo o DOm no HTML - com o DOM uso os metodos deste Objeto DOM ',
    'Api Dom : CAPTURA um elemento no DOM html - usando o document. metodo selecionar tag html',
    'Javascript : Guarda em uma variavel Js',
    'Api Dom Object . metodo : TENHO o objeto do Dom referenciado na var JS  >> ACESSO com ponto o metodo do DOM  ',
    'Valor :: e dou um valor',
    'https://app.diagrams.net/#G1aOKTOtucP28t7nKHMDrSV4ElLT0HYn-x',
)

console.log(fluxoApiDomJS)
