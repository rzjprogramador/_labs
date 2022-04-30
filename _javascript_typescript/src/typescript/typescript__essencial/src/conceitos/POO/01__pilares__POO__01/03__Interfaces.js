// Utilizar --> criar um objeto baseado na interface
var roblox = {
    title: 'Roblox',
    description: 'Descricao Roblox',
    genre: 'crianca',
    plataform: ['PS3', 'Xbox', 'PS4'],
    getSimilars: function (title) {
        console.log("Este jogo " + title + " pode ser jogado..");
    },
    getSimilars2: function (title) {
        console.log("Teste funcao opcional " + title + " pra rolar tem qeu ver se ele \u00E9 verdade..");
    }
};
// Chamar Utilizar
/* Nao vai compilar metodo assinalado como opcional tem que verificar se ele é verdade quando for usa-lo
...porque ele como opcional pode ser indefinido e indefinido nao pode ser uam funcao*/
// verificando se ele é verdadeiro na hora de usar : se for vai mostrar o metodo
if (roblox.getSimilars2) {
    roblox.getSimilars2(roblox.title);
}
// mostrando o outro metodo
if (roblox.getSimilars) {
    roblox.getSimilars(roblox.title);
}
// mostrar props
console.log(roblox.description);
console.log(roblox.plataform);
// Criando o obj
var novaInter = {
    // preenchendo props extendidas
    title: 'Novo jogo',
    description: 'descricao nova Inter',
    genre: 'genero nova',
    // E preenchendo as props novas da NovaInter :: 
    originalGame: roblox,
    novoConteudo: ['Novo Conteudo', 'Mais dois', 'Mais tres']
};
// Mostrar
console.log('\n ========================================== \n');
console.log('Este é o novo jogo extendido do outro objeto roblox >>', novaInter);
console.log('\n ========================================== \n');
// ==== IMPLEMENTANDO INTERFACE EM CLASSE --> Semelhante Herança MAS É implements
// defino que minha classe vai ter as props novas dela e tudo que tem na interface que ela esta implementando
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
// utilizar criar a instancia da classe e preencher o novo objeto
var novoGame2 = new CreateGame('Novo game', 'Descricao do novo game', 'Genero Adolescente');
console.log('ESTE É O NOVO GAME >> ', novoGame2);
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
