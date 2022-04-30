const teclado2 = require('prompt-sync')()
// Modo simples

class Personagem2 {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number = 5,
        public ataque: number,
        public defesa: number,
    ) {
        /* SÓ ACESSO AQUI OS ARGS SE QUISER MUDAR ALGO AQUI
         */
        // this.nome = 'Programador'
    }
}

//AO INSTANCIAR OS VALORES DAS PROPS VEM DA REQUEST FEITO PELO CLIENT

let p2 = new Personagem2('Reinaldo', 30, 15, 20, 15)
console.log(p2)

// ...

// ACESSANDO VALORES DO OBJ DE INSTANCIA DA CLASSE

console.log(`Agora ${p2.nome} --
tem energia ${p2.energia}
tem vida ${p2.vida}
tem ataque ${p2.ataque}
tem defesa ${p2.defesa}

`)

// BRINCANDO COM DADOS VINDOS DO PROMPT-SYNC E O OBJ CRIADO

let opcao2: Number = 0

while (opcao2 != 9) {
    console.log('========== Personagem ==========')
    console.log('| 1 - treinar ataque           |')
    console.log('| 2- treinar defesa            |')
    console.log('| 3- Imprimir                  |')
    console.log('| 9- Sair                      |')
    console.log('================================')

    switch (opcao2) {
        case 1:
            p2.ataque += 1
            break

        case 2:
            p2.defesa += 2
            break

        case 3:
            console.log('O OBJ esta assim :', p2)
            break

        default:
            break
    }

    opcao2 = Number(teclado2('Escolha uma opcao2: '))
}
