abstract class UserConta2 {
    public nome: string
    protected idade: number

    constructor (nome: string, idade: number) {

        this.nome = nome
        this.idade = idade

    }

    logDetalhes(): void {
        console.log(`Usuario(a) ${this.nome} tem ${this.idade} de idade `)
    }
}

/* === CLASSE QUE VAI HERDAR A CLASSE UserConta2  ========================*/

class PessoaConta2 extends UserConta2 {
    // Propriedades novas desta classe
    private nickname: string
    private nivel: number

    constructor (nome: string, idade: number, nickname: string, nivel: number) {
        // super() para trazer as props da classe superior herdada
        super(nome, idade)

        // atribuir valor as variaveis  -- dando as variaveis desta classe o que vier das variaveis do param do construtor
        this.nickname = nickname
        this.nivel = nivel

    }

    /* Acessors === get :   set: ============== */
    get getNivel () {
        console.log('-- CABE LOGICA AQUI PARA PERMITIR ESTA VISUALIZACAO --> no GET-- ')
        return this.nivel
    }
    /* GET : vai buscar a informacao da prop. -- só apra leitura
        ... cabe uma Logica para ter acesso a esta leitura
        
        corpo da funcao get : clausula get na frente do nome do getfuncao() nao recebe nada e retorna a prop. this.prop desta classe 
        */

    set setNivel (nivel: number) {
        this.nivel = nivel
    }
    /* Setter vai setar um valor :
    recebe a prop e no corpo da funcao modifica a prop desta classe fazendo ela receber como valor a prop que for passada 

    
    */


    logPessoaDetalhe() {
        console.log(`O jogador ${this.nome} com o nickname ${this.nickname} esta no nivel ${this.nivel}`)
    }
}
/* UTILIZAR NOVA CLASSE HERDADA */
const guga = new PessoaConta2('Gustavo', 11, 'gugaNick', 9)
const reinaldo = new PessoaConta2('Reinaldo', 43, 'reizaoNick', 11)
// console.log('Este é o obj guga >> ', guga)


// USANDO FUNCAO DA CLASSE SUPERIOR PARA ESTE OBJ
guga.logDetalhes()
guga.logPessoaDetalhe()
reinaldo.logPessoaDetalhe()

/* ACESSANDO PELOS ACESSORS GETTER e SETTER */
console.log('Acessando prop readonly : pelo Get >> ',guga.getNivel)

/* MUDANDO A PROP PELO SET DO OBJETO -- Vantagem que modificacoes sao feitas pelos acessor SETTER*/
guga.setNivel = 100
console.log('Agora o nivel de Guga to olhando pelo Get ficou :: ', guga.getNivel)
console.log('E o obj guga ficou ', guga)



/* TENTATIAVS DE ACESSOS PROIBIDAS PELOS MODIFICADORES */

// TENTANDO CRIAR UMA INSTANCIA UM OBJ DE UMA CLASSE ABSTRACT
// const vaiDarRuim = new UserConta2('RuimSauro', 99, 'deuRuimNick', 11)

// TENTANDO MUDAR VALOR DE PROP PRIVATE
// console.log(guga.nickname)
// guga.nickname = 'gustavo novo'
// console.log(guga.nickname)

// TENTANDO MUDAR VALOR PROP READONLY
// guga.nivel = 8

// TENTANDO CHAMAR OU ALTERAR PROP PROTECTED 
// guga.idade



/* MODIFICADORES PARA NAO PODER MUDAR PROPRIEDAES DA CLASSE - SEM SER POR MEIO DE METODOS 
    * private : nao pode acessar as propriedades fora da classe
    .. É quando nao queremos que seja lido nem alterado fora da classe

    * readonly : só para leitura :: Pode ser acessado fora da classe , mas nao pode ser modificado

    * protected :: protegida :: só consegue chamar dentro da classe de origem e das classes que a herdam ..
    .. nao consegue chamar fora ..Mas podemos ler seu valor fora se ele for exporto 
    ...atraves de metodos das classes que herdam sua origem 

*/

/*
VISIBILIDADE E ACESSO CLASSES :

abstract class :: classe abstrata :: 
Nao posso Instanciar a classe ... mas posso extender 
interessante : Quando queremso criar classe modelo apra outras classes , mas nada mudado apartir dela


*/