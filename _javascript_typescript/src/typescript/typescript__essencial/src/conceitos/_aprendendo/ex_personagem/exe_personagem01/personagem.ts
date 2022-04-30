export default class Personagem1 {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number = 5,
        public ataque: number,
        public defesa: number,
    ) {}

    status(): string {
        return `
        //// :: STATUS :: ////

        Guerreiro :
        Nome: ${this.nome}
        Energia: ${this.energia.toFixed(1)}
        Ataque: ${this.ataque.toFixed(1)}
        Defesa: ${this.defesa.toFixed(1)}

        //// :::::::::: ////

        `
        /*  Nesta func retornei o texto para impressao
        quem vai definir como vai mostrar imprimir é a instanciação */
    }

    treinarAtaque(): void {
        this.ataque += Math.random() * 7
        this.energia -= Math.random() * 10

        if (this.defesa > 100) {
            this.defesa = 0
            // a ideia é nao passar de 100
        }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5
        this.energia -= Math.random() * 10

        if (this.defesa > 100) {
            this.defesa = 0
            // a ideia é nao passar de 100
        }
    }

    descansar(tempoHoras: number): void {
        this.energia += tempoHoras * (Math.random() * 10)
        /* A opcao hora de descanso sera o arg tempoHOras vezes o randomico * 10
            - Assim Se ele usar de energia 10 vai descansar 20
            fazer uma expressao no randomico pra primeiro calcular o randomico e depois multiplicar pela hora que ele quer de descanso
        */

        if (this.energia > 100) {
            this.energia = 100
            // a ideia é nao passar de 100
        }

        /*
        Nesta func descansar nao vou retornar -- vou dar a opção/ que é parametro
        vai ser tempoHoras que sera do tipo number
        E na handler de instanciacao que vou usa-lo
        vou criar uma var pra receber do client o valor deste param
        e no invocacao dessa funcao lá vou passar a resposta deste argumento que vira de lá msm

        oO NOME DO PARAMETRO DENTRO DA FUNCAO PODE SER QULQUER UM--
        SÓ TEM QUE SER IGUAL DO APSSADO NA PROPRIA FUNCAO
        SENDO ASSIM TENHO QUE USAR ESTE PARAMETRO DENTRO DA FUNCAO
        PARA SER TRASNFORMADO E DAR UM MOLDE DE RESULTADO ONDE ELA ESTA SENDO INVOCADA.

        */
    }

    batalhar(): number {
        // logica calculo do desgaste se cheagr a zero estaMOrto
        let desgaste: number = Math.random() * 100
        this.energia -= desgaste

        /*A energia como esta sendo processada sempre recalculada
        Quero apresentar ela .. quero retornar este resultado pra quem chamou
        Ao colocar este retorno que retorna um number -- informo que tbm sera o tipo de rretorno da funcao
        */

        return desgaste
    }

    esMorto(): boolean {
        return this.energia < 0

        /*
            ECONOMIZANDO TODO ESTE CODIGO DESNECESSARIO
            AGORA QUE ESTA FUNCAO TEM QUE RETORNAR SOMENTE UM BOOLEAN
            TRUE OU FALSE SE A ENERGIA É MENOR QUE ZERO

             RETORNO SÓ O QUE FOI PEDIDO ACIMA

             ECONOMIZO ISTO

            if (this.energia < 0) {
             // Qual a pergunta do nome do metodo :: ésMorto -- neste if confirma q sim entao retorno true
             return true
            tirei daqui o console - avisando a impressao que Ops MOrreu..
             como aqui retorna boolean deixa pra instanciacao imprimir esta mensagem como quiser
         } else {
            return false
        }

        */
    }
}
