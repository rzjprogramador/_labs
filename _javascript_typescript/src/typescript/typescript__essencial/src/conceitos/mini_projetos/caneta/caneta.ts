type CanetaPropsProtocol = {
    _nome: string
    _modelo: string
    _cor: string
    _ponta: number
    _carga: number
    _tampada: boolean

}

export class Caneta {
    constructor(
        private canetaProps: CanetaPropsProtocol,
    ) {}

    /*  Metodos Modificadores  */
    get modelo() { return this.canetaProps._modelo }

    set modelo(md: string) { this.canetaProps._modelo = md }

    get ponta() { return this.canetaProps._ponta }

    set ponta(valor: number) { this.canetaProps._ponta = valor }

    status() {
        return `
            Modelo: ${this.canetaProps._modelo}
            Cor: ${ this.canetaProps._cor }
            Ponta: ${this.canetaProps._ponta}
            Carga: ${this.canetaProps._carga}
            Esta Tampada ? Posso rabiscar ?: ${this.canetaProps._tampada}
        `;
    }

    rabiscar() {
        if(this.canetaProps._tampada == true) {
            console.log(`ERRO.. ${this.canetaProps._nome} Nao posso rabiscar`)
        } 
        else {
            console.log(`OK...${this.canetaProps._nome} Esta Rabiscando ...`)
        }
    }

    /*  Atributos privados sendo usados nos metodos publicos    */
    public tampar() {
        this.canetaProps._tampada = true
    }

    public destampar() {
        this.canetaProps._tampada = false
    }
}

/*PREENCHER DADOS */
const caneta1 = new Caneta({ _nome: 'Caneta1', _modelo: 'Bic1', _cor: 'Azul', _ponta: 99, _carga: 88, _tampada: true })
const caneta2 = new Caneta({ _nome: 'Caneta2', _modelo: 'Outra marca', _cor: 'Vermelho', _ponta: 55, _carga: 77, _tampada: false })


/*main :: USAR / RECUPERAR */

// utilizando funcoes
caneta1.destampar()
caneta1.tampar()

// acessando atraves do get
console.log( caneta1.modelo )
console.log(caneta1.ponta)

// mudando atraves do set
// caneta1.modelo = 'BicSetado 2'
// caneta1.ponta = 100

// Status atual do objeto
console.log( caneta1.status() )


/* ------------------------------------------- */

/* NOVO OBJETO E SUAS ACOES :: */
console.log(`========== ANTES DAS AÇOES ========== `)
console.log(caneta2)

console.log(`----------------------------  `)
console.log(`------- ACOES -------  `)
caneta2.rabiscar()
caneta2.destampar()
caneta2.tampar()
console.log(`----------------------------  `)

console.log(`========== DEPOIS DAS AÇOES ========== `)
console.log(caneta2)

/* ------------------------------------------- */