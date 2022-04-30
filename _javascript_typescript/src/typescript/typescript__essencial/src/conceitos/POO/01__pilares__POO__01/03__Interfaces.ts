interface Game {
    title: string
    description: string
    readonly genre: string
    plataform?: Array<string>
    getSimilars?: (title: string) => void /*Assinatura do metodo colocar o tipo do retorno*/
    getSimilars2?: (title: string) => void /*Assinatura do metodo colocar o tipo do retorno*/
}
// Utilizar --> criar um objeto baseado na interface

const roblox: Game = {
    title: 'Roblox',
    description: 'Descricao Roblox',
    genre: 'crianca',
    plataform: ['PS3', 'Xbox', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Este jogo ${title} pode ser jogado..`)
    },
    getSimilars2: (title: string) => {
        console.log(`Teste funcao opcional ${title} pra rolar tem qeu ver se ele é verdade..`)
    }

}
// Chamar Utilizar
/* Nao vai compilar metodo assinalado como opcional tem que verificar se ele é verdade quando for usa-lo
...porque ele como opcional pode ser indefinido e indefinido nao pode ser uam funcao*/

// verificando se ele é verdadeiro na hora de usar : se for vai mostrar o metodo
if (roblox.getSimilars2) {
    roblox.getSimilars2(roblox.title) 
}

// mostrando o outro metodo
if (roblox.getSimilars) {
    roblox.getSimilars(roblox.title)
}

// mostrar props
console.log(roblox.description)
console.log(roblox.plataform)

// == EXTENDENDO INTERFACE

interface NovaInter extends Game {
    originalGame: Game
    novoConteudo: string[]
}

// Criando o obj
const novaInter: NovaInter = {

    // preenchendo props extendidas
    title: 'Novo jogo',
    description: 'descricao nova Inter',
    genre: 'genero nova',

    // E preenchendo as props novas da NovaInter :: 
    originalGame: roblox,      // >> aqui como foi assinalado na interface como extend pude peagr o objeto inteiro pronto
    novoConteudo: ['Novo Conteudo', 'Mais dois', 'Mais tres'],

}

// Mostrar
console.log('\n ========================================== \n')
console.log('Este é o novo jogo extendido do outro objeto roblox >>', novaInter)
console.log('\n ========================================== \n')

// ==== IMPLEMENTANDO INTERFACE EM CLASSE --> Semelhante Herança MAS É implements
// defino que minha classe vai ter as props novas dela e tudo que tem na interface que ela esta implementando

class CreateGame implements Game {
    title: string
    description: string
    genre: string

    constructor (t: string, d: string, g: string) {

        this.title = t
        this.description = d
        this.genre = g

    }
}
// utilizar criar a instancia da classe e preencher o novo objeto
const novoGame2 = new CreateGame('Novo game','Descricao do novo game', 'Genero Adolescente')
console.log('ESTE É O NOVO GAME >> ', novoGame2)






// =====================================


/*
INTERFACE
Interface analogia: "A parte da face de um controle remoto só os botoes e a capa dentro encapsula as funcoes"

È exclusiva para objetos e classes :: È um conjunto de dados para descrever a estrutura de um objeto e tbm classe

utilizar modificadores :: readonly para nao ser modificado depois da criacao do objeto somente ficar como leitura

extender outra interface no type aliases era & aqui é extends
Cria a nova interface coloca um extends para a interface que quer extender 
passa as novas props desta interface
e para usar a extendida pode ser usada como tipo de uma propriedade nova , assim esta prop tera tudo qeu tem da extendida

/ ==== IMPLEMENTANDO INTERFACE EM CLASSE --> Semelhante Herança MAS É implements
// defino que minha classe vai ter as props novas dela e tudo que tem na interface que ela esta implementando

===== Diferencas para type Aliases :: =====
* type aliases : vc pode descrever a estrutura de tipos primitivos e objetos
* interface só descreve tipos para objetos



*/